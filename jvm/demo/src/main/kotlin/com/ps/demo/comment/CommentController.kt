package com.ps.demo.comment

import com.ps.data.Comment
import com.ps.demo.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

/*TODO: how to get userId*/

@RestController
@RequestMapping("/user/post/{postId}/comment")
@CrossOrigin("\${cors}")
class CommentController(val commentService: CommentService, val userService: UserService) {

    /******************************************  POST  ******************************************/

    /*
        Create a new comment for the specified post
    */

    @PostMapping
    fun createComment(@RequestParam() email : String,
                      @PathVariable("postId") postId : Int,
                      @RequestBody comment : Comment)
            : ResponseEntity<Any?> {
        val userId = userService.getUserById(email)!!.userId
        val commentKey = commentService.createComment(userId!!,postId,comment)
        if (commentKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(commentKey, HttpStatus.OK)
    }

    /******************************************  GET  ******************************************/

    /*
        Get a certain amount of comments for a specific post based on @page
    */

    @GetMapping()
    fun getAllComments(@PathVariable("postId") postId : Int,
                       @RequestParam() page : Int) : ResponseEntity<List<Comment?>?> {
        val comments = commentService.getAllComments(postId,page)
        return ResponseEntity(comments, HttpStatus.OK)
    }

    /*
        Get a comment based on the commentId
    */

    @GetMapping("/{commentId}")
    fun getCommentById(@PathVariable("postId") postId : Int,
                       @PathVariable("commentId") commentId : Int) : ResponseEntity<Any? > {
        val comments = commentService.getCommentById(postId,commentId) ?: return ResponseEntity("Resource not found",NOT_FOUND)
        return ResponseEntity(comments, HttpStatus.OK)
    }


    /******************************************  DELETE  ******************************************/

    /*
        Delete a specific comment
    */

    @DeleteMapping("/{commentId}")
    fun deleteComment(@PathVariable("postId") postId : Int, @PathVariable("commentId") commentId : Int) : ResponseEntity<Any?> {
        commentService.deleteComment(postId,commentId)
        return ResponseEntity("Comment with id $commentId deleted", HttpStatus.OK)
    }

}