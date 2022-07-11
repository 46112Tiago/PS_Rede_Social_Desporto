package com.ps.data


import org.postgresql.geometric.PGpoint
import java.net.URL

data class Compound(
        val id : Int?,
        val name :String?,
        val contact: String?,
        val description : String?,
        val summary : String?,
        val pictures : List<String>?,
        val location : PGpoint?,
        val sports : List<Sports>?,
        val material : List<Material>?,
        val schedule: List<Schedule>?,
        val fields: List<Field>?,
        val dressingRoom : Char?, //M / F / A / N
        val parking : Boolean?,
        val accepted : Boolean?
)