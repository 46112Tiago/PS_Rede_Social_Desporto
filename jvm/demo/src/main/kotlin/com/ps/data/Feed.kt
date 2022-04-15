package com.ps.data

data class Feed(
    val id : Int,
    val posts : List<Post>,
    val user : User
)
