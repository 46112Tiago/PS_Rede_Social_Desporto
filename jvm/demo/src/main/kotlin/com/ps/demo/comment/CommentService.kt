package com.ps.demo.comment

import com.ps.data.Comment
import java.util.*

interface CommentService {

    fun createComment(userId : Int, postId: Int, comment : Comment) : Int?

    fun deleteComment(postId : Int, commentId : Int)

    fun getAllComments(postId: Int) : LinkedHashMap<Int, Comment>?

}