package com.ps.demo.post

import com.ps.data.Post
import com.ps.data.User
import com.ps.demo.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class PostController (val postService: PostService, val userService: UserService) {

    @GetMapping("/user/post")
    fun getPosts(@RequestParam(required = false) email : String,
                 @RequestParam(required = false) page : Int) : ResponseEntity<List<Post?>> {
        val userId = userService.getUserById(email)!!.userId
        val posts = postService.getPosts(userId!!,page) ?: return ResponseEntity(BAD_REQUEST)
        return ResponseEntity(posts.toList(), HttpStatus.OK)
    }

    @GetMapping("/post/{postId}")
    fun getPostById(@PathVariable("postId") postId : Int) : ResponseEntity<Post?> {
        val post : Post = postService.getPostById(postId) ?: return ResponseEntity(NOT_FOUND)
        return ResponseEntity(post, HttpStatus.OK)
    }

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

    @PostMapping("/user/post")
    fun createPost(@RequestParam(required = false) email : String,
                    @RequestBody post: Post
                   ) : ResponseEntity<Int?> {
        val userId = userService.getUserById(email)!!.userId
        val postKey : Int? = postService.insertPost(userId!!,post)
        if (postKey == -1) return ResponseEntity(BAD_REQUEST)
        return ResponseEntity(postKey, HttpStatus.OK)
    }

}
