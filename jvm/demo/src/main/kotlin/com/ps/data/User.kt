package com.ps.data

import java.net.URL
import java.sql.Date
import java.sql.Timestamp

data class User constructor(
    val user_id : Int?,
    val firstname : String?,//= "unknown",
    val lastname : String?, //= "unknown",
    val city : String?, //= "unknown",
    val birthday : Timestamp?, //= Date(20000603),
    val profilepic : String?,   //? = "unknown",
    val email : String?, //= "unknown",
    val available : Boolean?, //= false,
    val gender : String?, //= "unknown",
    //TODO
    //val sports : List<String>?, //= listOf(),
    ///val groups : List<Group>?, //= listOf(),
    //val friends : List<User>?, //= listOf(),
    //val events : List<Event>? //= listOf(),

    )

