package com.ps.demo.user

import com.ps.data.Group
import com.ps.data.Post
import com.ps.data.User
import com.ps.demo.group.GroupService
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.RowMapperFactory
import org.jdbi.v3.core.result.RowView
import org.springframework.stereotype.Repository

@Repository
class GroupRepoImplementation (var jdbi: Jdbi) : GroupService {

    override fun getGroupById(groupId : Int): Group? {
        val toReturn = jdbi.withHandle<Group?,RuntimeException> { handle : Handle ->
            handle.createQuery("SELECT " +
                    "user_group.id as g_id," +
                    "user_profile.userid as u_userid," +
                    "user_group.ownerid as g_ownerid, " +
                    "user_group.picture as g_picture, " +
                    "user_group.name as g_name, " +
                    //"post.pictures as p_pictures, " +
                    "user_profile.firstname as u_firstname, " +
                    "user_profile.lastname as u_lastname, " +
                    "user_profile.city as u_city, " +
                    "user_profile.birthdate as u_birthdate, " +
                    "user_profile.profilepic as u_profilepic, " +
                    "user_profile.email as u_email, " +
                    "user_profile.available as u_available, " +
                    "user_profile.gender as u_gender " +
                    "FROM user_group INNER JOIN user_profile on user_group.ownerid = user_profile.userid AND user_group.id = ?")
                .bind(0,groupId)
                .registerRowMapper(factory(User::class.java, "u"))
                .registerRowMapper(factory(Group::class.java, "g"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Group?>, rowView: RowView ->
                    val group = map.computeIfAbsent(rowView.getColumn("g_id", Int::class.javaObjectType)) {
                        rowView.getRow(Group::class.java)
                    }

                    if (rowView.getColumn("g_ownerid", Int::class.javaObjectType) != null) {
                        group!!.owner = rowView.getRow(User::class.java)
                    }
                    map
                }.values.toList().get(0)
        }

        return toReturn
    }

    fun factory(type: Class<*>, prefix: String): RowMapperFactory {
        return RowMapperFactory.of(type, KotlinMapper(type, prefix))
    }



    override fun getGroupParticipants(groupId : Int): List<User?> {
        val toReturn = jdbi.withHandle<List<User?>,RuntimeException> { handle : Handle ->
            handle.createQuery("SELECT " +
                    "group_participant.groupid as gp_groupid," +
                    "user_profile.userid as u_userid," +
                    "group_participant.participantid as gp_participantid," +
                    //"post.pictures as p_pictures, " +
                    "user_profile.firstname as u_firstname, " +
                    "user_profile.lastname as u_lastname " +
                    "FROM group_participant INNER JOIN user_profile on group_participant.participantid = user_profile.userid AND group_participant.groupid = ?")
                .bind(0,groupId)
                .registerRowMapper(factory(User::class.java, "u"))
                .registerRowMapper(factory(Group::class.java, "g"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, User?>, rowView: RowView ->
                    val users = map.computeIfAbsent(rowView.getColumn("u_userid", Int::class.javaObjectType)) {
                        rowView.getRow(User::class.java)
                    }
                    map
                }.values.toList()
        }
        return toReturn

    }


    override fun deleteGroup(groupId : Int, userId : Int) {

        jdbi.useHandle<RuntimeException> {
            handle: Handle ->
                handle.createUpdate("DELETE FROM USER_GROUP WHERE id = ? AND ownerId = ? ")
                    .bind(0,groupId)
                    .bind(1,userId)
                    .execute()
        }

    }

    override fun insertGroup(userId : Int, group : Group): Int? {
        val pk : Group = jdbi.withHandle<Group?,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into USER_GROUP(name, ownerid) values(?,?)")
                .bind(0,group.name)
                .bind(1,userId)
                .executeAndReturnGeneratedKeys("id").mapTo<Group>().one()
        }

        jdbi.useHandle<RuntimeException> {handle : Handle ->
            handle.createUpdate("insert into group_participant(participantid, groupid) values(?,?)")
                .bind(0,userId)
                .bind(1,pk.id)
                .execute()
        }

        return pk.id
    }

    override fun deleteGroupParticipant(groupId: Int,userId: Int) : Int{
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM group_participant WHERE groupid = ? AND participantid = ?")
                .bind(0, groupId)
                .bind(1,userId)
                .execute()
        }
        return userId
    }

    override fun exitGroup(groupId: Int, userId: Int) {
        jdbi.useHandle<RuntimeException> { handle : Handle ->
            handle.createUpdate("Delete from GROUP_PARTICIPANT where groupId = ? AND participantId = ? ")
                .bind(0,groupId)
                .bind(1,userId)
                .execute()
        }
    }

    override fun insertGroupParticipant(groupId: Int, participantsId: List<String>){
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            for (participantId: String in participantsId) {
                insertGroupParticipantAux(groupId, participantId, handle)
            }
        }
    }

    fun insertGroupParticipantAux(groupId: Int, participantId: String, handle: Handle) {
        handle.createUpdate("insert into group_participant(groupid, participantid) values (?,?)")
            .bind(0,groupId)
            .bind(1,participantId)
            .execute()
    }

    override fun getUserGroups(userId : Int): List<Group?> {
        val toReturn = jdbi.withHandle<List<Group?>,RuntimeException> { handle : Handle ->
            handle.createQuery("SELECT " +
                    "user_group.id as g_id," +
                    "user_profile.userid as u_userid," +
                    "user_group.ownerid as g_ownerid, " +
                    "user_group.picture as g_picture, " +
                    "user_group.name as g_name, " +
                    //"post.pictures as p_pictures, " +
                    "user_profile.firstname as u_firstname, " +
                    "user_profile.lastname as u_lastname, " +
                    "user_profile.city as u_city, " +
                    "user_profile.birthdate as u_birthdate, " +
                    "user_profile.profilepic as u_profilepic, " +
                    "user_profile.email as u_email, " +
                    "user_profile.available as u_available, " +
                    "user_profile.gender as u_gender " +
                    "FROM user_group INNER JOIN user_profile on user_group.ownerid = user_profile.userid AND user_group.ownerid = ?")
                .bind(0,userId)
                .registerRowMapper(factory(User::class.java, "u"))
                .registerRowMapper(factory(Group::class.java, "g"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Group?>, rowView: RowView ->
                    val group = map.computeIfAbsent(rowView.getColumn("g_id", Int::class.javaObjectType)) {
                        rowView.getRow(Group::class.java)
                    }

                    if (rowView.getColumn("g_ownerid", Int::class.javaObjectType) != null) {
                        group!!.owner = rowView.getRow(User::class.java)
                    }
                    map
                }.values.toList()
        }

        return toReturn
    }
}
