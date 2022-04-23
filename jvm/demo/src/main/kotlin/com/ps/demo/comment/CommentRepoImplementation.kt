package com.ps.demo.comment

import com.ps.data.Comment
import com.ps.data.Test
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@Repository
class CommentRepoImplementation(val jdbi: Jdbi) : CommentService{

    override fun createComment(postId: Int, comment : String): Int? {

        val current = LocalDateTime.now()

        val formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")
        val formatted = current.format(formatter)

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "comment(postId,commentDate,comment,commentCreatorId) " +
                    "values(?,?,?,?)")
                    .bind(0,postId)
                    .bind(1,formatted)
                    .bind(2,comment)
                    .execute()
        }
        val toReturn = jdbi.withHandle<Comment?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select id from POST_COMMENT order by id desc").mapTo<Comment>().one()

        }
        return toReturn.id
    }

    override fun deleteComment(postId: Int, commentId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM POST_COMMENT WHERE id = ? AND postId = ? ")
                    .bind(0, commentId)
                    .bind(1,postId).
                    execute()
        }
    }

    override fun getAllComments(postId: Int): List<Comment>? {
        val toReturn = jdbi.withHandle<List<Comment>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select comment, firstName, lastName, profilePic " +
                    "from POST_COMMENT join USER_PROFILE " +
                    "ON userId = USER_PROFILE.id  " +
                    "WHERE postId = ?")
                    .bind(0,postId)
                    .mapTo<Comment>()
                    .list()
        }

        return toReturn
    }

}