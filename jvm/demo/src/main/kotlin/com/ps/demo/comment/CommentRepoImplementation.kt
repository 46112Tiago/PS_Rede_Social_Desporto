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
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*

@Repository
class CommentRepoImplementation(val jdbi: Jdbi) : CommentService{

    override fun createComment(postId: Int, comment : Comment) : Int? {

        val current = LocalDateTime.now()

        val formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")
        val formatted = current.format(formatter)

        val pk = jdbi.withHandle<Comment,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "POST_COMMENT(postId,commentDate,comment,commentCreatorId) " +
                    "values(?,?,?,?)")
                    .bind(0,postId)
                    .bind(1,formatted)
                    .bind(2,comment.comment)
                    .executeAndReturnGeneratedKeys("id").mapTo<Comment>().one()
        }
        return pk.id
    }

    override fun deleteComment(postId: Int, commentId: Int) {
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

    override fun getAllComments(postId: Int) {
        val toReturn  = jdbi.withHandle<Unit,RuntimeException> { handle : Handle ->

            val comments = handle.createQuery("Select c_comment, u_firstName, u_lastName " +
                    "from POST_COMMENT join USER_PROFILE " +
                    "ON userId = USER_PROFILE.id  " +
                    "WHERE postId = ?")
                    .registerRowMapper(factory(Comment::class.java, "c"))
                    .registerRowMapper(factory(User::class.java, "u"))
                    .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Comment>, rowView: RowView ->
                        val comment = map.computeIfAbsent(rowView.getColumn("c_id", Int::class.javaObjectType)) {
                            rowView.getRow(Comment::class.java) as Comment
                        }

                        if (rowView.getColumn("p_id", Int::class.javaObjectType) != null) {
                            comment.user = rowView.getRow(User::class.java) as User
                        }
                        map
                    }
                    .toList().map { it.second }
        }

        return toReturn
    }

}
