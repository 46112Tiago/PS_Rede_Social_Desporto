package com.ps.data

import java.net.URL

data class Group(
    val id : Int?,
    val picture : String?,
    val name : String?,
    var owner : User?
)
