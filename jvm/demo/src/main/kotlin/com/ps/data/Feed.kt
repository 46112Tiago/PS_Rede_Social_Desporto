package com.ps.data

data class Feed(
    val feed_id : Int?,
    val user : User?,
    val posts : List<Post?>?
)
