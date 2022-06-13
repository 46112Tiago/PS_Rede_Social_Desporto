package com.ps.demo.comment

import com.ps.data.Comment
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

/*TODO: how to get userId*/

@RestController
@RequestMapping("/user/{userId}/post/{postId}/comment")
@CrossOrigin("http://localhost:3000")
class CommentController(val commentService: CommentService) {

    @PostMapping
    fun createComment(@PathVariable("userId") userId : Int,
                      @PathVariable("postId") postId : Int,
                      @RequestBody comment : Comment)
            : ResponseEntity<Any?> {
        val commentKey = commentService.createComment(userId,postId,comment)
        return ResponseEntity(commentKey, HttpStatus.OK)
    }

    @GetMapping()
    fun getAllComments(@PathVariable("postId") postId : Int,
                       @RequestParam(required = false) page : Int) : ResponseEntity<Any?> {
        val comments = commentService.getAllComments(postId,page)
        return ResponseEntity(comments, HttpStatus.OK)
    }
/*
    @GetMapping()
    fun getCommentsId(@PathVariable("postId") postId : Int,
                       @RequestParam(required = false) page : Int) : ResponseEntity<Any?> {
        val comments = commentService.getCommentsId(postId,page)
        return ResponseEntity(comments, HttpStatus.OK)
    }
*/

    @GetMapping("/{commentId}")
    fun getCommentById(@PathVariable("postId") postId : Int,
                       @PathVariable("commentId") commentId : Int) : ResponseEntity<Comment? > {
        val comments = commentService.getCommentById(postId,commentId)
        return ResponseEntity(comments, HttpStatus.OK)
    }

    @DeleteMapping("/{commentId}")
    fun deleteComment(@PathVariable("postId") postId : Int, @PathVariable("commentId") commentId : Int) : ResponseEntity<Any?> {
        commentService.deleteComment(postId,commentId)
        return ResponseEntity(HttpStatus.OK)
    }

}