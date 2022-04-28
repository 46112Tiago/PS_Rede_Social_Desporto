package com.ps.demo.groupMessage

import com.ps.data.GroupMessage
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository


@Repository
class GroupMessageRepoImplementation (var jdbi: Jdbi) : GroupMessageService {

    override fun getAllMessages(userId : Int, groupId: Int): List<GroupMessage>? {
        val toReturn = jdbi.withHandle<List<GroupMessage>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from GROUP_MESSAGE where senderId = ? AND groupId = ? ")
                    .bind(0,userId)
                    .bind(1,groupId)
                    .mapTo<GroupMessage>()
                    .list()
        }

        return toReturn
    }

    override fun sendMessage(userId : Int, groupId : Int,groupMessage: GroupMessage): Int? {
        val toReturn : GroupMessage = jdbi.withHandle<GroupMessage,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "GROUP_MESSAGE(senderId,groupId,message,messageDate) " +
                    "values(?,?,?,?)")
                    .bind(0,userId)
                    .bind(1,groupId)
                    .bind(2,groupMessage.message)
                    .bind(3,groupMessage.messageDate)
                    .executeAndReturnGeneratedKeys("id").mapTo<GroupMessage>().one()
        }

        return toReturn.id
    }

}