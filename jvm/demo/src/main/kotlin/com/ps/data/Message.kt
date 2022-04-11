package com.ps.data

import java.sql.Date

abstract class Message(
    val id:Int,
    val text : String,
    val date : Date,
)

