package com.ps.data

import java.sql.Timestamp

data class Review(
    val id : Int?,
    val compound : Compound?,
    val field : Field?,
    var user : User?,
    val rating : Float?,
    val description : String?,
    val reviewDate: Timestamp?
)
