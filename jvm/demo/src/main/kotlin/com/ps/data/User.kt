package com.ps.data

import java.sql.Timestamp
import java.time.LocalDate

data class User constructor(
    val userId : Int?,
    val firstName : String? = "",//= "unknown",
    val lastName : String? = "", //= "unknown",
    val city : String?, //= "unknown",
    val birthdate : LocalDate?, //= Date(20000603),
    val profilepic : String?,   //? = "unknown",
    val email : String?, //= "unknown",
    val available : Boolean?, //= false,
    val gender : String?, //= "unknown",
    //TODO
    var sports : List<Sports>? = listOf(),
    ///val groups : List<Group>?, //= listOf(),
    var friends : List<User>?, //= listOf(),
    //val events : List<Event>? //= listOf(),
)
