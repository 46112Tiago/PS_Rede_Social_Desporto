package com.ps.data

import java.sql.Date

data class Comment(
    val id : Int,
    val user : User,
    val text : String,
    val date : Date,
    val likes : Int
)
