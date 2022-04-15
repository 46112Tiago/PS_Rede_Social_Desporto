package com.ps.data

import java.net.URL

data class Group(
    val id : Int,
    val picture : URL,
    val name : String,
    val participants : List<User>
)
