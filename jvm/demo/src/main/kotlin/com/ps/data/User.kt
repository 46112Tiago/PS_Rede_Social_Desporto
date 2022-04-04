package com.ps.demo.data

import java.sql.Blob
import java.sql.Date

data class User(
    val id : Int,
    val fName : String,
    val lName : String,
    val city : String,
    val bDay : Date,
    val profilePic : Blob,
    val email : String,
    val available : Boolean,
    val sports : List<String>,
    val gender : String,
    val groupsId : List<Int>,
    val friendsId : List<Int>,
    val eventsId : List<Int>,

    )
