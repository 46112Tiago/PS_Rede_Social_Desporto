package com.ps.data

data class Review(
    val id : Int,
    val compound : Compound,
    val field : Field,
    val user : User,
    val rating : Float,
    val description : String
)
