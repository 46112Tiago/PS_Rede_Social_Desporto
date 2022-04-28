package com.ps.data

import java.util.*

data class GroupMessage(
    val id : Int?,
    val group : Group?,
    val sender : User?,
    val messageDate : Date?,
    val message : String?
)
