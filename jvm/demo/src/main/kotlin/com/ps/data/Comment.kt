package com.ps.data

import java.sql.Timestamp

data class Comment(
        val id : Int?,
        var user : User?,
        val comment : String?,
        val commentDate : Timestamp?,
) {

}
