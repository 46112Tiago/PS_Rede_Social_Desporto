package com.ps.data

import com.ps.data.Comment
import java.net.URL
import java.sql.Blob
import java.sql.Date

data class Post(
    val id : Int,
    val description : String,
    val pictures : List<URL>,
    val date : Date,
    val user : User,
    val comments : List<Comment>,
    val likes : Int
)
