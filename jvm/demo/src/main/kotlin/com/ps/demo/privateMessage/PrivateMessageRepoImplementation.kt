package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import com.ps.data.Schedule
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository


@Repository
class PrivateMessageRepoImplementation (var jdbi: Jdbi) : PrivateMessageService {

    override fun getAllMessages(userId : Int): List<PrivateMessage>? {
        val toReturn = jdbi.withHandle<List<PrivateMessage>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from PRIVATE_MESSAGE where senderId = ? ")
                    .bind(0,userId)
                    .mapTo<PrivateMessage>()
                    .list()
        }

        return toReturn
    }

    override fun sendMessage(privateMessage: PrivateMessage): Int? {
        val toReturn : Schedule = jdbi.withHandle<Schedule,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "PRIVATE_MESSAGE(senderId,receiverId,message,date) " +
                    "values(?,?,?,?)")
                    .bind(0,privateMessage.receiver?.userId)
                    .bind(1,privateMessage.sender?.userId)
                    .bind(2,privateMessage.date)
                    .bind(3,privateMessage.message)
                    .executeAndReturnGeneratedKeys("id").mapTo<Schedule>().one()
        }

        return toReturn.id
    }

}

//    override fun getGroups(): List<Group?> {
//        val toReturn = jdbi.withHandle<List<Group?> ,RuntimeException> { handle : Handle ->
//            handle.createQuery("Select * from user_group ").mapTo<Group>().list()
//
//        }
//
//        return toReturn
//    }
//
//
//    override fun getGroupById(groupId : Int): Group? {
//        val toReturn = jdbi.withHandle<Group?,RuntimeException> { handle : Handle ->
//            handle.createQuery("Select * from USER_GROUP where id = ?")
//                    .bind(0,groupId)
//                    .mapTo<Group>()
//                    .one()
//        }
//
//        return toReturn
//    }
//
//    override fun getGroupParticipants(groupId : Int): List<User?> {
//        val toReturn = jdbi.withHandle<List<User?>,RuntimeException> { handle : Handle ->
//            //handle.createQuery("Select * from group_participant where groupid = ?")
//            handle.createQuery("(Select participantid from group_participant left join user_profile up on group_participant.participantid = up.id where groupid = ?)")
//                .bind(0,groupId)
//                .mapTo<User>()
//                .list()
//        }
//
//        return toReturn
//    }
//
//
//    override fun deleteGroup(groupId : Int) {
//
//        jdbi.useHandle<RuntimeException> {
//            handle: Handle ->
//                handle.createUpdate("DELETE FROM GROUP_PARTICIPANT WHERE groupid = ?").bind(0,groupId).execute()
//        }
//
//        jdbi.useHandle<RuntimeException> { handle: Handle ->
//            handle.createUpdate("DELETE FROM USER_GROUP WHERE id = ?").bind(0, groupId).execute()
//        }
//
//    }
//
//    override fun insertGroup(group : Group): Int? {
//        jdbi.useHandle<RuntimeException> { handle: Handle ->
//            handle.createUpdate("insert into USER_GROUP(name, ownerid) values(?,?)")
//                .bind(0,group.name)
//                .bind(1,group.ownerid)
//                .execute()
//        }
//
//        val toReturn = jdbi.withHandle<Group?,RuntimeException> { handle : Handle ->
//            handle.createQuery("Select * from USER_GROUP order by id desc").mapTo<Group>().list().first()
//
//        }
//        return toReturn.id
//    }
////
////    override fun getGroupParticipantById(groupId: Int, userId: Int): User? {
////        val user = jdbi.withHandle<User,RuntimeException> { handle : Handle ->
////            handle.createQuery("Select * from group_participant where groupid = ? AND participantid = ?")
////                .bind(0,groupId)
////                .bind(1,userId)
////                .mapTo<User>().one()
////        }
////
////        return toReturn
////    }
//
//    override fun deleteGroupParticipant(groupId: Int,userId: Int) : Int{
//        jdbi.useHandle<RuntimeException> { handle: Handle ->
//            handle.createUpdate("DELETE FROM group_participant WHERE groupid = ? AND participantid = ?")
//                .bind(0, groupId)
//                .bind(1,userId)
//                .execute()
//        }
//        return userId
//    }
//
//    override fun insertGroupParticipant(groupId: Int, userId: Int): Int? {
//        jdbi.useHandle<RuntimeException> { handle: Handle ->
//            handle.createUpdate("insert into group_participant(groupid, participantid) values(?,?)")
//                .bind(0,groupId)
//                .bind(1,userId)
//                .execute()
//        }
//
//        val toReturn = jdbi.withHandle<Int?,RuntimeException> { handle : Handle ->
//            handle.createQuery("Select * from group_participant order by participantid desc").mapTo<Int>().list().first()
//
//        }
//        return toReturn
//    }
//
//    override fun getUserGroups(userId : Int): List<Group?> {
//        val groups = jdbi.withHandle<List<Group?>, RuntimeException> { handle: Handle ->
//            handle.createQuery("(Select groupid from group_participant left join user_group ug on group_participant.groupid = ug.id where participantid = ?)")
//                .bind(0, userId)
//                .mapTo<Group>().list()
//        }
//
//
//        return groups
//    }
//}
