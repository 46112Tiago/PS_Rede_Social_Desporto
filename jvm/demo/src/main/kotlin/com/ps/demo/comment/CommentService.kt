package com.ps.demo.comment

import com.ps.data.Comment
import com.ps.demo.user.UserRepoImplementation
import org.springframework.stereotype.Service
import java.util.*

@Service
class CommentService(val commentRepo : CommentRepoImplementation) {

    fun createComment(userId : Int, postId: Int, comment : Comment) : Int? {
        return commentRepo.createComment(userId,postId,comment)
    }

    fun deleteComment(postId : Int, commentId : Int) {
        return commentRepo.deleteComment(postId,commentId)
    }

    fun getAllComments(postId: Int, page: Int) : List<Comment?>? {
        return commentRepo.getAllComments(postId,page)
    }

    fun getCommentsId(postId: Int, page: Int) : List<Comment?>? {
        return commentRepo.getCommentsId(postId,page)
    }

    /*fun getCommentById(postId: Int, commentId: Int) : Comment? {
        return commentRepo.getCommentById(postId,commentId)
    }*/

}