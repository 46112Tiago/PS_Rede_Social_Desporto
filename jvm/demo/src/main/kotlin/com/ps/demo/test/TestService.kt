package com.ps.demo.test

import com.ps.data.Event
import com.ps.data.Test

interface TestService {

    fun getTest() : List<Test>

    fun getTestById() : Test?

    fun deleteTest()

    fun insertTest() : Int

}