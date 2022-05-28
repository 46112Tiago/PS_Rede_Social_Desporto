package com.ps.data


import org.postgresql.geometric.PGpoint
import java.net.URL

data class Compound(
        val id : Int?,
        val name :String?,
        val description : String?,
        val summary : String?,
        val pictures : URL?,
        val location : PGpoint?,
        //val material : List<Material>?,
        //val schedule: List<Schedule>?,
        val dressingRoom : Char?, //M / F / A / N
        val parking : Boolean?,
        val accepted : Boolean?
)