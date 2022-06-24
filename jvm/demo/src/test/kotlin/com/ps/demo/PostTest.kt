package com.ps.demo

import com.ps.data.Comment
import com.ps.data.Post
import com.ps.demo.comment.CommentController
import com.ps.demo.post.PostController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import java.sql.Timestamp
import java.time.LocalDateTime
import kotlin.math.absoluteValue

@SpringBootTest
class PostTest {

        @Autowired
        var postController: PostController ? = null

        @Test
        fun createDeletePost() {
            val current = LocalDateTime.now()
            val timestamp : Timestamp = Timestamp.valueOf(current)
            val post = Post(null,"New post integration test",timestamp,null,10)
            val postResponse = postController!!.createPost("projeto.seminario2022",post)
            val postId = postResponse.body!!.absoluteValue
            Assertions.assertNotNull(postId)
            postController!!.deletePost(postId)
            val getPost = postController!!.getPostById(postId)
            Assertions.assertEquals(HttpStatus.NOT_FOUND,getPost.statusCode)
        }

        @Test
        fun createPostWithTooManyCharacters() {
            val current = LocalDateTime.now()
            val timestamp : Timestamp = Timestamp.valueOf(current)
            val post = Post(null,"New post integration test New post integration test New post integration test New post integration test.",timestamp,null,10)
            val postResponse = postController!!.createPost("projeto.seminario2022",post)
            Assertions.assertEquals(HttpStatus.BAD_REQUEST,postResponse.statusCode)
        }

        @Test
        fun createPostWithoutCharacters() {
            val current = LocalDateTime.now()
            val timestamp : Timestamp = Timestamp.valueOf(current)
            val post = Post(null,"",timestamp,null,10)
            val postResponse = postController!!.createPost("projeto.seminario2022",post)
            Assertions.assertEquals(HttpStatus.BAD_REQUEST,postResponse.statusCode)
        }

        @Test
        fun createPostWithOnlyWhitespaces() {
            val current = LocalDateTime.now()
            val timestamp : Timestamp = Timestamp.valueOf(current)
            val post = Post(null,"                  ",timestamp,null,10)
            val postResponse = postController!!.createPost("projeto.seminario2022",post)
            Assertions.assertEquals(HttpStatus.BAD_REQUEST,postResponse.statusCode)
        }

        @Test
        fun getPosts() {
            val postResponse = postController!!.getPosts("projeto.seminario2022",0)
            Assertions.assertEquals(10,postResponse.body!!.size)
        }

        //Also compare the List<Comment> ids
        @Test
        fun getPostsPaging() {
            var page = 0
            val postResponse0 = postController!!.getPosts("projeto.seminario2022",page)
            Assertions.assertEquals(10,postResponse0.body!!.size)
            page += 1
            val postResponse1 = postController!!.getPosts("projeto.seminario2022",page)
            Assertions.assertEquals(10,postResponse1.body!!.size)
            page += 1
            val postResponse2 = postController!!.getPosts("projeto.seminario2022",page)
            Assertions.assertEquals(4,postResponse2.body!!.size)
        }

        @Test
        fun getPostsNegativePaging() {
            val postResponse = postController!!.getPosts("projeto.seminario2022",-1)
            Assertions.assertEquals(HttpStatus.BAD_REQUEST,postResponse.statusCode)
        }

}