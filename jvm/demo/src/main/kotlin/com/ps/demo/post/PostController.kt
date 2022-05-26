package com.ps.demo.post

import com.ps.data.Post
import com.ps.data.User
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping
@CrossOrigin("https://localhost:3000")
class PostController (val postService: PostService) {


    @GetMapping("/user/{userId}/post")
    fun getPosts(@PathVariable("userId") userId : Int) : ResponseEntity<List<Post?>> {
        val groups = postService.getPosts(userId).toList()
        return ResponseEntity(groups, HttpStatus.OK)
    }

    @GetMapping("/post/{postId}")
    fun getPostById(@PathVariable("postId") postId : Int) : ResponseEntity<Post?> {
        val group : Post? = postService.getPostById(postId)
        return ResponseEntity(group, HttpStatus.OK)
    }

    /*
    @GetMapping("/post/{postId}/user")
    fun getPostCreator(@PathVariable("postId") postId: Int) : ResponseEntity<User> {
        val user : User? = postService.getPostCreator(1)
        return ResponseEntity(user,HttpStatus.OK)
    }*/

    @GetMapping("/post/user/{userId}")
    fun getUserPosts(@PathVariable("userId") userId: Int) : ResponseEntity<List<Post?>> {
        val posts = postService.getUserPosts(userId)
        return ResponseEntity(posts,HttpStatus.OK)
    }

    @DeleteMapping("/post/{postId}")
    fun deletePost(@PathVariable("postId") postId : Int) : ResponseEntity<Any?> {
        postService.deletePost(postId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/post")
    fun createPost(@PathVariable("userId") userId: Int,
                    @RequestBody post: Post
                   ) : ResponseEntity<Any?> {

        val postKey : Int? = postService.insertPost(userId,post)
        return ResponseEntity(postKey, HttpStatus.OK)
    }

}
