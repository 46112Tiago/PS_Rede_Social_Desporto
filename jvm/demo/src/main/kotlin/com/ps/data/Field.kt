package com.ps.demo.data

import java.net.URL
import java.sql.Blob
import java.sql.Date

data class Field(
    val id : Int,
    val compound : Compound,
    val name : String,
    val pictures : List<URL>
)

