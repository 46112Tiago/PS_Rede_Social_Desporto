package com.ps.demo.data

import java.sql.Date

data class Message(
    val id:Int,
    val text : String,
    val date : Date,
    val groupId : Int
) {

}

data class PrivateMessage(
    val id : Int,
    val text : String,
    val date : Date,
    val receiverId : Int
)