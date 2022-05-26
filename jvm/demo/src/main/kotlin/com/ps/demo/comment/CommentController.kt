package com.ps.demo.comment

import com.ps.data.Comment
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

/*TODO: how to get userId*/

@RestController
@RequestMapping("/user/{userId}/post/{postId}/comment")
class CommentController(val commentService: CommentService) {

    @GetMapping
    fun getAllComments(@PathVariable("postId") postId : Int) : ResponseEntity<Any?> {
        val comments = commentService.getAllComments(postId)?.values
        return ResponseEntity(comments, HttpStatus.OK)
    }

    @DeleteMapping("/{commentId}")
    fun deleteComment(@PathVariable("postId") postId : Int, @PathVariable("commentId") commentId : Int) : ResponseEntity<Any?> {
        commentService.deleteComment(postId,commentId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping
    fun createComment(@PathVariable("userId") userId : Int,
            @PathVariable("postId") postId : Int,
                   @RequestBody comment : Comment)
    : ResponseEntity<Any?> {
        val commentKey = commentService.createComment(userId,postId,comment)
        return ResponseEntity(commentKey, HttpStatus.OK)
    }

}