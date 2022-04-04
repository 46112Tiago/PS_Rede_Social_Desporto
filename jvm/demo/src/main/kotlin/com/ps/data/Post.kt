package com.ps.demo.data

import java.sql.Blob
import java.sql.Date

data class Post(
    val id : Int,
    val decription : String,
    val pictures : Blob,
    val date : Date,
    val userId : Int
)
