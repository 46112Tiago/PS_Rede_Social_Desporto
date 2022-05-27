package com.ps.data

import org.postgresql.util.PGBinaryObject
import java.net.URL

data class Image(
    val id : Int?,
    val typeimage : String?,
    val image : PGBinaryObject?,
    val userid : Int?,
    val postid : Int?,
    val compoundid : Int?,
    val fieldid : Int?

)


