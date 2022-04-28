package com.ps.demo.comment

import com.ps.data.Comment
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

/*TODO: how to get userId*/

@RestController
@RequestMapping("/post/{postId}/comment")
class CommentController(val commentRepo : CommentRepoImplementation) {

    @GetMapping
    fun getAllComments(@PathVariable("postId") postId : Int) : ResponseEntity<Any?> {
        val comments = commentRepo.getAllComments(postId)
        return ResponseEntity(comments, HttpStatus.OK)
    }

    @DeleteMapping("/{commentId}")
    fun deleteComment(@PathVariable("postId") postId : Int, @PathVariable("commentId") commentId : Int) : ResponseEntity<Any?> {
        commentRepo.deleteComment(postId,commentId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping
    fun createComment(@PathVariable("postId") postId : Int,
                   @RequestBody comment : Comment)
    : ResponseEntity<Any?> {
        val commentKey = commentRepo.createComment(postId,comment.comment!!)
        return ResponseEntity(commentKey, HttpStatus.OK)
    }

}