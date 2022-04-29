package com.ps.demo.comment

import com.ps.data.Comment

interface CommentService {

    fun createComment(postId: Int, comment : Comment) : Int?

    fun deleteComment(postId : Int, commentId : Int)

    fun getAllComments(postId: Int)

}