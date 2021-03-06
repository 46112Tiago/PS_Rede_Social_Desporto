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
@CrossOrigin("\${cors}")
class PostController (val postService: PostService, val userService: UserService) {

    /******************************************  GET  ******************************************/

    /* 
        Get a certain amount of posts made by the users friends, based on @page
    */

    @GetMapping("/user/post")
    fun getPosts(@RequestParam() email : String,
                 @RequestParam() page : Int) : ResponseEntity<List<Post?>> {
        val userId = userService.getUserById(email)!!.userId
        val posts = postService.getPosts(userId!!,page) ?: return ResponseEntity(BAD_REQUEST)
        return ResponseEntity(posts.toList(), HttpStatus.OK)
    }

    /* 
        Get a certain post 
    */

    @GetMapping("/post/{postId}")
    fun getPostById(@PathVariable("postId") postId : Int) : ResponseEntity<Any> {
        val post : Post = postService.getPostById(postId) ?: return ResponseEntity("Resource not found",NOT_FOUND)
        return ResponseEntity(post, HttpStatus.OK)
    }

    /* 
        Get a certain amount of posts made by the user, based on @page
    */

    @GetMapping("/post/user")
    fun getUserPosts(@RequestParam() email : String,
                     @RequestParam() page : Int) : ResponseEntity<List<Post?>> {
        val userId = userService.getUserById(email)!!.userId
        val posts = postService.getUserPosts(userId!!,page)
        return ResponseEntity(posts,HttpStatus.OK)
    }

    /******************************************  DELETE  ******************************************/

    /* 
        Delete a post
    */

    @DeleteMapping("/post/{postId}")
    fun deletePost(@PathVariable("postId") postId : Int) : ResponseEntity<Any> {
        postService.deletePost(postId)
        return ResponseEntity("Post $postId deleted",HttpStatus.OK)
    }

    /******************************************  POST  ******************************************/

    /* 
        Create a new post
    */

    @PostMapping("/user/post")
    fun createPost(@RequestParam() email : String,
                    @RequestBody post: Post
                   ) : ResponseEntity<Any> {
        val userId = userService.getUserById(email)!!.userId
        val postKey : Int? = postService.insertPost(userId!!,post)
        if (postKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(postKey, HttpStatus.OK)
    }

}
