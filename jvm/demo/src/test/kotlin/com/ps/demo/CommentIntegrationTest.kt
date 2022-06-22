package com.ps.demo

import com.ps.data.Comment
import com.ps.demo.comment.CommentController
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import java.sql.Timestamp
import java.time.LocalDateTime


@SpringBootTest
class CommentIntegrationTest {

    @Autowired
    var commentController: CommentController? = null

    @Test
    fun createComment() {

        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val comment = Comment(null,null,"New comment integration test",timestamp)
        val commentId = commentController!!.createComment("projeto.seminario2022",1,comment)
        Assertions.assertNotNull(commentId.body)
    }

}