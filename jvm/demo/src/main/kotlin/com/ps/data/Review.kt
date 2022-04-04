package com.ps.demo.data

data class Review(
    val id : Int,
    val compoundId : Int,
    val userId : Int,
    val rating : Float,
    val description : String
)
