package com.ps.data

import java.sql.Timestamp

data class GroupMessage(
    val id : Int?,
    val group : Group?,
    val sender : User?,
    val messageDate : Timestamp?,
    val message : String?
)
