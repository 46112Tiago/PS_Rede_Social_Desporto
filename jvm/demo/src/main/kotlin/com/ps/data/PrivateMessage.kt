package com.ps.data

import java.sql.Date

data class PrivateMessage(
    val id : Int?,
    val message : String?,
    val date : Date?,
    val receiver : User?,
    val sender : User?
)