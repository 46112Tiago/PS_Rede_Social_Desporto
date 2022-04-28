package com.ps.data

import java.net.URL

data class Compound(
        val id : Int?,
        val name :String?,
        val description : String?,
        val summary : String?,
        val pictures : URL?,
        val location : Point?,
        val material : List<String>?,
        val dressingRoom : Char?, //M / F / A / N
        val parking : Boolean?,
        val accepted : Boolean?
)

data class Point(
        val x : Float?,
        val y : Float?
)
