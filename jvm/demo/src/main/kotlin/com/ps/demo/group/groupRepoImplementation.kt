package com.ps.demo.user

import com.ps.data.Group
import com.ps.data.User
import com.ps.demo.group.GroupService
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.JoinRowMapper
import org.jdbi.v3.core.mapper.reflect.BeanMapper
import org.jdbi.v3.core.result.LinkedHashMapRowReducer
import org.jdbi.v3.sqlobject.config.RegisterRowMapper
import org.skife.jdbi.v2.util.IntegerMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class GroupRepoImplementation @Autowired constructor(var jdbi: Jdbi) : GroupService {
    override fun getGroups(): List<Group?> {
        val toReturn = jdbi.withHandle<List<Group?> ,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from user_group ").mapTo<Group>().list()

        }

        return toReturn
    }


    override fun getGroupById(groupId : Int): Group? {
        val toReturn = jdbi.withHandle<Group?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from USER_GROUP where id = ?")
                    .bind(0,groupId)
                    .mapTo<Group>()
                    .one()
        }

        return toReturn
    }

    override fun getGroupParticipants(groupId : Int): List<User?> {
        val toReturn = jdbi.withHandle<List<User?>,RuntimeException> { handle : Handle ->
            //handle.createQuery("Select * from group_participant where groupid = ?")
            handle.createQuery("Select * from user_profile inner join group_participant gp on user_profile.userId = gp.participantid AND groupid = ?")
                .bind(0,groupId)
                .mapTo<User>()
                .list()
        }
        return toReturn
    }


    override fun deleteGroup(groupId : Int) {

        jdbi.useHandle<RuntimeException> {
            handle: Handle ->
                handle.createUpdate("DELETE FROM GROUP_PARTICIPANT WHERE groupid = ?").bind(0,groupId).execute()
        }

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM USER_GROUP WHERE id = ?").bind(0, groupId).execute()
        }

    }

    override fun insertGroup(group : Group): Int? {
        val pk : Group = jdbi.withHandle<Group?,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into USER_GROUP(name, ownerid) values(?,?)")
                .bind(0,group.name)
                .bind(1,group.ownerid)
                .executeAndReturnGeneratedKeys().mapTo<Group>().one()
        }

        jdbi.useHandle<RuntimeException> {handle : Handle ->
            handle.createUpdate("insert into group_participant(participantid, groupid) values(?,?)")
                .bind(0,group.ownerid)
                .bind(1,group.id)
                .execute()
        }

        return pk.id
    }
//
//    override fun getGroupParticipantById(groupId: Int, userId: Int): User? {
//        val user = jdbi.withHandle<User,RuntimeException> { handle : Handle ->
//            handle.createQuery("Select * from group_participant where groupid = ? AND participantid = ?")
//                .bind(0,groupId)
//                .bind(1,userId)
//                .mapTo<User>().one()
//        }
//
//        return toReturn
//    }

    override fun deleteGroupParticipant(groupId: Int,userId: Int) : Int{
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM group_participant WHERE groupid = ? AND participantid = ?")
                .bind(0, groupId)
                .bind(1,userId)
                .execute()
        }
        return userId
    }

    override fun insertGroupParticipant(groupId: Int, userId: Int): Any? {
        val pk = jdbi.withHandle<Int,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into group_participant(groupid, participantid) values(?,?)")
                .bind(0,groupId)
                .bind(1,userId)
                .execute()
        }

        return null
    }

    override fun getUserGroups(userId : Int): List<Group?> {
        val groups = jdbi.withHandle<List<Group?>, RuntimeException> { handle: Handle ->
//            handle.createQuery("(Select groupid from group_participant inner join user_group ug on group_participant.groupid = ug.id where participantid = ?)")
//                .bind(0, userId).map((rs, ctx) -> new User(rs.getInt("id"), rs.getString("name")))
//                //.registerRowMapper(BeanMapper.factory(Group::class.java,"group_participant"))
//                .execute()
            handle.createQuery("SELECT id,ownerid,picture,name FROM user_group INNER JOIN group_participant as gp ON user_group.id = gp.groupid AND gp.participantid = ?")
                .bind(0,userId)
                .mapTo<Group>().list()
                //.map(JoinRowMapper.forTypes(Group::class.java, Article.class))
            //.forEach(jr -> joined.put(jr.get(User.class), jr.get(Article.class)));
        }


        return groups
    }
}
