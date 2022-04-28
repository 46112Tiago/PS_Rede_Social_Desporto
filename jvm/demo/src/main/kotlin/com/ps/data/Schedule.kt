package com.ps.data

import java.sql.Time

data class Schedule(
        val id : Int?,
        val compound: Compound?,
        val weekday : Char?,
        val openingHour : Time?,
        val closingHour : Time?,
        val optionalDescription : String
)
