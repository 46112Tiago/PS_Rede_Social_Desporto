package com.ps.data

import java.sql.Date

data class Comment(
    val id : Int?,
    val user : User?,
    val comment : String?,
    val commentDate : Date?,
    val likes : Int?
)
