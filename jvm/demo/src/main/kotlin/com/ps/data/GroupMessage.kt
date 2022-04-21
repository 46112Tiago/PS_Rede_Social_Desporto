package com.ps.data

import java.util.Date

data class GroupMessage(
    val id : Int,
    val group : Group,
    val sender : User,
    val date : Date,
    val message : String
)
