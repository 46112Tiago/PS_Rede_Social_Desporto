package com.ps.data

import java.time.LocalTime

data class Schedule(
        val id : Int?,
        val weekday : String?,
        val openingHour : LocalTime?,
        val closingHour : LocalTime?,
        val optionalDescription : String? = ""
)
