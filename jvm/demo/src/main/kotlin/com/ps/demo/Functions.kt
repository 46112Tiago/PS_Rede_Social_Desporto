package com.ps.demo

import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.mapper.RowMapperFactory

//https://gist.github.com/mustafo/36e9f754aaefc85924eb0ddc276d970e 24/04/2022
fun factory(type: Class<*>, prefix: String): RowMapperFactory {
    return RowMapperFactory.of(type, KotlinMapper(type, prefix))
}

//https://www.techiedelight.com/remove-whitespaces-string-kotlin/ 22/06/2022
fun removeWhitespaces(text:String): String{
    return text.replace("\\s".toRegex(), "")
}