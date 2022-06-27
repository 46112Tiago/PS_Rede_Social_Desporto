package com.ps.demo

import com.ps.data.Comment
import com.ps.demo.comment.CommentController
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.http.HttpStatus
import java.sql.Timestamp
import java.time.LocalDateTime
import kotlin.math.absoluteValue


@SpringBootTest
class CommentTest {

    @Autowired
    var commentController: CommentController? = null

    @Test
    fun createDeleteComment() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val comment = Comment(null,null,"New comment integration test",timestamp)
        val commentResponse = commentController!!.createComment("projeto.seminario2022",1,comment)
        Assertions.assertNotNull(commentResponse.body)
        val commentId = commentResponse.body as Int
        commentController!!.deleteComment(1,commentId)
        val getComment = commentController!!.getCommentById(1,commentId)
        Assertions.assertEquals(HttpStatus.NOT_FOUND,getComment.statusCode)
    }

    @Test
    fun createCommentWithTooManyCharacters() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val comment = Comment(null,null,"New comment integration test with more than the allowed two hundred characters." +
                "New comment integration test with more than the allowed two hundred characters.",timestamp)
        val commentResponse = commentController!!.createComment("projeto.seminario2022",1,comment)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,commentResponse.statusCode)
    }

    @Test
    fun createCommentWithoutCharacters() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val comment = Comment(null,null,"",timestamp)
        val commentResponse = commentController!!.createComment("projeto.seminario2022",1,comment)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,commentResponse.statusCode)
    }

    @Test
    fun createCommentWithOnlyWhitespaces() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val comment = Comment(null,null,"                ",timestamp)
        val commentResponse = commentController!!.createComment("projeto.seminario2022",1,comment)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,commentResponse.statusCode)
    }

    @Test
    fun getComments() {
        val commentResponse = commentController!!.getAllComments(2,0)
        Assertions.assertEquals(5,commentResponse.body!!.size)
    }

    //Also compare the List<Comment> ids
    @Test
    fun getCommentsPaging() {
        var page = 0
        val commentResponse0 = commentController!!.getAllComments(2,page)
        Assertions.assertEquals(5,commentResponse0.body!!.size)
        page += 1
        val commentResponse1 = commentController!!.getAllComments(2,page)
        Assertions.assertEquals(5,commentResponse1.body!!.size)
        page += 1
        val commentResponse2 = commentController!!.getAllComments(2,page)
        Assertions.assertEquals(5,commentResponse2.body!!.size)
        page += 1
        val commentResponse3 = commentController!!.getAllComments(2,page)
        Assertions.assertEquals(3,commentResponse3.body!!.size)
    }

}