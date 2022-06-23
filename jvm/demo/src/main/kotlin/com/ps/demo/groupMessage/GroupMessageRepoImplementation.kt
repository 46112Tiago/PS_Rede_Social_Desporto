package com.ps.demo.groupMessage

import com.ps.data.GroupMessage
import com.ps.data.Post
import com.ps.data.User
import com.ps.demo.factory
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
class GroupMessageRepoImplementation (var jdbi: Jdbi) {

    fun getAllMessages(userId : Int, groupId: Int): List<GroupMessage?> {

        val toReturn = jdbi.withHandle<List<GroupMessage?>,RuntimeException> { handle : Handle ->
            handle.createQuery("SELECT " +
                    "group_message.id as gm_id," +
                    "user_profile.userid as u_userid," +
                    "group_message.message as gm_message, " +
                    "group_message.messageDate as gm_messageDate, " +
                    "group_message.groupid as gm_groupid, " +
                    "user_profile.firstname as u_firstname, " +
                    "user_profile.lastname as u_lastname, " +
                    "user_profile.city as u_city, " +
                    "user_profile.birthdate as u_birthdate, " +
                    "user_profile.profilepic as u_profilepic, " +
                    "user_profile.email as u_email, " +
                    "user_profile.available as u_available, " +
                    "user_profile.gender as u_gender " +
                    "FROM USER_PROFILE INNER JOIN group_message ON user_profile.userid = group_message.senderid " +
                    "INNER JOIN user_group ON group_message.groupid = user_group.id AND user_profile.userid = ? AND user_group.id = ?")
                .bind(0,userId).bind(1,groupId)
                .registerRowMapper(factory(User::class.java, "u"))
                .registerRowMapper(factory(GroupMessage::class.java, "gm"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, GroupMessage?>, rowView: RowView ->
                    val gm = map.computeIfAbsent(rowView.getColumn("gm_id", Int::class.javaObjectType)) {
                        rowView.getRow(GroupMessage::class.java)
                    }

                    if (rowView.getColumn("u_userid", Int::class.javaObjectType) != null) {
                        gm!!.sender = rowView.getRow(User::class.java)
                    }
                    map
                }.values.toList()
        }

        return toReturn
    }

    fun sendMessage(userId : Int, groupId : Int,groupMessage: GroupMessage): Int? {

        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)

        val toReturn : GroupMessage = jdbi.withHandle<GroupMessage,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "GROUP_MESSAGE(senderId,groupId,message,messageDate) " +
                    "values(?,?,?,?)")
                    .bind(0,userId)
                    .bind(1,groupId)
                    .bind(2,groupMessage.message)
                    .bind(3,timestamp)
                    .executeAndReturnGeneratedKeys("id").mapTo<GroupMessage>().one()
        }

        return toReturn.id
    }

}