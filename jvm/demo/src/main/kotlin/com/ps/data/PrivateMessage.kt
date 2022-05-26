package com.ps.data

import java.sql.Timestamp

data class PrivateMessage(
    val id : Int?,
    val message : String?,
    val date : Timestamp?,
    val receiver : User?,
    val sender : User?
)