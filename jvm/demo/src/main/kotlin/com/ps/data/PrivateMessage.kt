package com.ps.data

import java.sql.Timestamp

data class PrivateMessage(
    val id : Int?,
    val message : String = "",
    val date : Timestamp?,
    var receiver : User?,
    var sender : User?
)