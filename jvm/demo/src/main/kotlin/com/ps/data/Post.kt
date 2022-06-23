package com.ps.data

import com.ps.data.Comment
import java.net.URL
import java.sql.Blob
import java.sql.Date
import java.sql.Timestamp

data class Post(
    val id : Int?,
    val description : String = "",
    //val pictures : List<String>?,
    val postdate : Timestamp?,
    var user : User?,
    val likes : Int?
)

