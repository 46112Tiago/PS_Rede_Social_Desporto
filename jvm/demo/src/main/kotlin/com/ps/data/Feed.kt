package com.ps.data

import com.ps.demo.data.*

data class Feed(
    val id : Int,
    val posts : List<Post>,
    val user : User
)
