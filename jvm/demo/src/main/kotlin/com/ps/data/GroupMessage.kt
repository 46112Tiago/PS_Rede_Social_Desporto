package com.ps.data

import java.sql.Timestamp

data class GroupMessage(
    val id : Int?,
    val groupid : Int?,
    var sender : User?,
    val messageDate : Timestamp?,
    val message : String = ""
)
