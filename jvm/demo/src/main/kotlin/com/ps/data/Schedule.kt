package com.ps.data

import java.sql.Time

data class Schedule(
        val id : Int?,
        val weekday : String?,
        val openingHour : String?,
        val closingHour : String?,
        val optionalDescription : String?
)
