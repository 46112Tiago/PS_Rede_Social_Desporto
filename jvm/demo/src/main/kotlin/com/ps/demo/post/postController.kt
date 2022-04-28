package com.ps.demo.post

import com.ps.data.Post
import com.ps.data.User
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.sql.Timestamp


@RestController
@RequestMapping
class PostController (val postRepo : PostRepoImplementation) {


    @GetMapping("/post")
    fun getPosts() : ResponseEntity<List<Post?>> {
        val groups = postRepo.getPosts()
        return ResponseEntity(groups, HttpStatus.OK)
    }

    @GetMapping("/post/{postId}")
    fun getGroupById(@PathVariable("postId") postId : Int) : ResponseEntity<Post?> {
        val group : Post? = postRepo.getPostById(postId)
        return ResponseEntity(group, HttpStatus.OK)
    }

    @GetMapping("/post/{postId}/user")
    fun getPostCreator(@PathVariable("postId") postId: Int) : ResponseEntity<User> {
        val user : User? = postRepo.getPostCreator(1)
        return ResponseEntity(user,HttpStatus.OK)
    }

    @GetMapping("/post/user/{userId}")
    fun getUserPosts(@PathVariable("userId") userId: Int) : ResponseEntity<List<Post?>> {
        val posts = postRepo.getUserPosts(userId)
        return ResponseEntity(posts,HttpStatus.OK)
    }


    @DeleteMapping("/post/{postId}")
    fun deletePost(@PathVariable("postId") postId : Int) : ResponseEntity<Any?> {
        postRepo.deletePost(postId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/post")
    fun createPost() : ResponseEntity<Any?> {
        val us = User(1,"Diogo","Fernandes","Torres Vedras", null,null,"diogotag@gmail.com",true,"Male")


        val post = Post(
            null,
            "test 2 post",
            emptyArray(),
            Timestamp(System.currentTimeMillis()),
            us,
            0
        )
        val postKey : Int? = postRepo.insertPost(post)
        return ResponseEntity(postKey, HttpStatus.OK)
    }

}
