package com.ps.demo.comment

import com.ps.data.Comment
import com.ps.data.User
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.RowMapperFactory
import org.jdbi.v3.core.result.RowView
import org.springframework.stereotype.Repository
import java.sql.Timestamp
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*

@Repository
class CommentRepoImplementation(val jdbi: Jdbi){

    fun createComment(userId : Int, postId: Int, comment : Comment) : Int? {

        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)

        val pk = jdbi.withHandle<Comment,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "POST_COMMENT(postId,commentDate,comment,commentCreatorId) " +
                    "values(?,?,?,?)")
                    .bind(0,postId)
                    .bind(1,timestamp)
                    .bind(2,comment.comment)
                    .bind(3,userId)
                    .executeAndReturnGeneratedKeys("id").mapTo<Comment>().one()
        }
        return pk.id
    }

    fun deleteComment(postId: Int, commentId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM POST_COMMENT WHERE id = ? AND postId = ? ")
                    .bind(0, commentId)
                    .bind(1,postId).
                    execute()
        }
    }

    fun factory(type: Class<*>, prefix: String): RowMapperFactory {
        return RowMapperFactory.of(type, KotlinMapper(type, prefix))
    }

    fun getAllComments(postId: Int) : LinkedHashMap<Int, Comment>? {
        val toReturn : LinkedHashMap<Int, Comment>? = jdbi.withHandle<LinkedHashMap<Int, Comment>?,RuntimeException> { handle : Handle ->

            handle.createQuery("Select post_comment.id as c_id, " +
                    "user_profile.userId as u_userId," +
                    "post_comment.comment as c_comment, " +
                    "post_comment.commentDate as c_commentDate," +
                    "user_profile.firstName as u_firstName, " +
                    "user_profile.lastName as u_lastName " +
                    "from POST_COMMENT join USER_PROFILE " +
                    "ON commentCreatorId = USER_PROFILE.userId  " +
                    "WHERE postId = ?")
                    .bind(0,postId)
                    .registerRowMapper(factory(Comment::class.java, "c"))
                    .registerRowMapper(factory(User::class.java, "u"))
                    .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Comment>, rowView: RowView ->
                        val comment = map.computeIfAbsent(rowView.getColumn("c_id", Int::class.javaObjectType)) {
                            rowView.getRow(Comment::class.java)
                        }

                        if (rowView.getColumn("u_userId", Int::class.javaObjectType) != null) {
                            comment.user = rowView.getRow(User::class.java)
                        }
                        map
                    }
        }

        return toReturn
    }

}
