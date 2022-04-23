package com.ps.demo.comment

import com.ps.data.Comment

interface CommentService {

    fun createComment(postId: Int, comment : String) : Int?

    fun deleteComment(postId : Int, commentId : Int)

    fun getAllComments(postId: Int) : List<Comment>?

}