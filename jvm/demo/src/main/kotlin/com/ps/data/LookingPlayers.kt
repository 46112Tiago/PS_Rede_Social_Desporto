package com.ps.data

import java.time.LocalDateTime

data class LookingPlayers(
    val id: Int?,
    var compound: Compound?,
    var sports: Sports?,
    var creator: User?,
    val startDateTime: LocalDateTime?,
    val participants: MutableList<User>? = mutableListOf(),
    val state: String?
)
