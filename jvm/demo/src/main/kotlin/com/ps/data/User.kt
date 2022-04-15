package com.ps.data

import java.net.URL
import java.sql.Date

data class User(
    val id : Int,
    val fName : String,
    val lName : String,
    val city : String,
    val bDay : Date,
    val profilePic : URL,
    val email : String,
    val available : Boolean,
    val sports : List<String>,
    val gender : String,
    val groups : List<Group>,
    val friends : List<User>,
    val events : List<Event>,

    )
