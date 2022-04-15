package com.ps.data

import org.antlr.v4.runtime.misc.Pair
import java.net.URL
import java.sql.Date

data class Compound(
        val id : Int,
        val name :String,
        val description : String,
        val pictures : URL,
        val location : Pair<Float, Float>,
        val material : List<String>,
        val dressingRoom : Char, //M / F / A / N
        val parking : Boolean,
        val schedule : List<Date>
)