package com.ps.data

import java.sql.Timestamp

data class LookingPlayers(
    val id: Int?,
    var compound: Compound?,
    var sports: Sports?,
    var creator: User?,
    val startDateTime: Timestamp?,
    val participants: MutableList<User>? = mutableListOf(),
    val state: String?
)
