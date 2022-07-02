package com.ps.demo.comment

import com.ps.data.Comment
import com.ps.demo.removeWhitespaces
import com.ps.demo.user.UserRepoImplementation
import org.springframework.stereotype.Service
import java.util.*

@Service
class CommentService(val commentRepo : CommentRepoImplementation) {

    fun createComment(userId : Int, postId: Int, comment : Comment) : Int? {
        
        /*Check if the length of a comment is bigger than it should or if the user didnt write anything*/

        val commentTxt =  removeWhitespaces(comment.comment)
        if (comment.comment.isEmpty() || comment.comment.length > 100 || commentTxt.isEmpty())
            return -1
        return commentRepo.createComment(userId,postId,comment)
    }

    fun deleteComment(postId : Int, commentId : Int) {
        return commentRepo.deleteComment(postId,commentId)
    }

    fun getAllComments(postId: Int, page: Int) : List<Comment?>? {
        return commentRepo.getAllComments(postId,page)
    }

    fun getCommentById(postId: Int, commentId: Int) : Comment? {
        val comment = commentRepo.getCommentById(postId,commentId)
        if (comment != null) return comment
        return null
    }

}