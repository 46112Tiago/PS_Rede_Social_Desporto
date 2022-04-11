package com.ps.demo.data

import java.sql.Date

data class PrivateMessage(
    val id : Int,
    val text : String,
    val date : Date,
    val receiver : User
)