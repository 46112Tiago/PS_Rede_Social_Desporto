package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository
import java.sql.Timestamp
import java.time.LocalDateTime


@Repository
class PrivateMessageRepoImplementation (var jdbi: Jdbi)  {

     fun getAllMessages(userId : Int, receiverId : Int): List<PrivateMessage>? {
        val toReturn = jdbi.withHandle<List<PrivateMessage>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from PRIVATE_MESSAGE where senderId = ? AND receiverId = ? ")
                    .bind(0,userId)
                    .bind(1,receiverId)
                    .mapTo<PrivateMessage>()
                    .list()
        }

        return toReturn
    }

     fun sendMessage(userId : Int,receiverId : Int,privateMessage: PrivateMessage): Int? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn : PrivateMessage = jdbi.withHandle<PrivateMessage,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "PRIVATE_MESSAGE(senderId,receiverId,date,message) " +
                    "values(?,?,?,?)")
                    .bind(0,userId)
                    .bind(1,receiverId)
                    .bind(2,timestamp)
                    .bind(3,privateMessage.message)
                    .executeAndReturnGeneratedKeys("id").mapTo<PrivateMessage>().one()
        }

        return toReturn.id
    }

}