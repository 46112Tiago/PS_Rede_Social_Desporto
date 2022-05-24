package com.ps.data


import org.postgresql.geometric.PGpoint
import java.net.URL

data class Compound(
        val id : Int?,
        val name :String?,
        val description : String?,
        val summary : String?,
        val pictures : URL?,
<<<<<<< HEAD
        //TODO: USe geoApi to convert location to coordinates
        val location : Point?,
        val material : List<String>?,
=======
        val location : PGpoint?,
        val material : List<Material>?,
        val schedule: List<Schedule>?,
>>>>>>> 81bd293647f044697bc39e7298ce6bbe722f9a2d
        val dressingRoom : Char?, //M / F / A / N
        val parking : Boolean?,
        val accepted : Boolean?
)