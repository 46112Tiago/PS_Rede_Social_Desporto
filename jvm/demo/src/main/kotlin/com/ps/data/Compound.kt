package com.ps.data

import java.net.URL

data class Compound(
        val id : Int?,
        val name :String?,
        val description : String?,
        val summary : String?,
        val pictures : URL?,
        //TODO: USe geoApi to convert location to coordinates
        val location : String?,
        val material : List<String>?,
        val dressingRoom : Char?, //M / F / A / N
        val parking : Boolean?,
        val accepted : Boolean?
)