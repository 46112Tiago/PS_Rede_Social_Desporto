package com.ps.data

import java.sql.Timestamp

data class LookingPlayers(
    val id: Int?,
    val compound: Compound?,
    val sports: Sports?,
    val creator: User?,
    val startDateTime: Timestamp?,
    val participants: List<User>?,
    val state: String?
)
