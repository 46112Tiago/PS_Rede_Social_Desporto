package com.ps.demo.comment

interface CommentService {

    fun createComment(postId: Int, comment : String) : Int?

    fun deleteComment(postId : Int, commentId : Int)

    fun getAllComments(postId: Int)

}