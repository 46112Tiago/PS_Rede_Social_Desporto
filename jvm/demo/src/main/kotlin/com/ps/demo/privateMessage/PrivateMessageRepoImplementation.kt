package com.ps.demo.privateMessage

import com.ps.data.*
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.RowMapperFactory
import org.jdbi.v3.core.result.RowView
import org.springframework.stereotype.Repository
import java.sql.Timestamp
import java.time.LocalDateTime


@Repository
class PrivateMessageRepoImplementation (var jdbi: Jdbi)  {

    fun factory(type: Class<*>, prefix: String): RowMapperFactory {
        return RowMapperFactory.of(type, KotlinMapper(type, prefix))
    }

     fun getAllMessages(userId : Int, receiverId : Int, page: Int): List<PrivateMessage?>? {
        val toReturn = jdbi.withHandle<List<PrivateMessage?>,RuntimeException> { handle: Handle ->
            handle.createQuery(
                "Select id as p_id, message as p_message, " +
                        "userId as u_userId " +
                        "from PRIVATE_MESSAGE JOIN USER_PROFILE ON senderId = userId " +
                        "where (senderId = ? AND receiverId = ?) OR (senderId = ? AND receiverId = ?) " +
                        "ORDER BY date DESC " +
                        "LIMIT 10 OFFSET ?"
            )
                .bind(0, userId)
                .bind(1, receiverId)
                .bind(2, receiverId)
                .bind(3, userId)
                .bind(4,page*10)
                .registerRowMapper(factory(PrivateMessage::class.java, "p"))
                .registerRowMapper(factory(User::class.java, "u"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, PrivateMessage?>, rowView: RowView ->
                    val private = map.computeIfAbsent(rowView.getColumn("p_id", Int::class.javaObjectType)) {
                        rowView.getRow(PrivateMessage::class.java)
                    }

                    if (rowView.getColumn("u_userId", Int::class.javaObjectType) != null) {
                        private!!.sender = rowView.getRow(User::class.java)
                    }

                    map
                }.values.toList()
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