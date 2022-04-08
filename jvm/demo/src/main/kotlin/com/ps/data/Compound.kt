package com.ps.demo.data

import java.sql.Blob
import java.sql.Date

data class Compound(
    val id : Int,
    val name :String,
    val description : String,
    val pictures : Blob,
    val location : Pair<Float,Float>,
    val material : List<String>,
    val dressingRoom : Char, //M / F / A / N
    val parking : Boolean,
    val schedule : List<Date>
)