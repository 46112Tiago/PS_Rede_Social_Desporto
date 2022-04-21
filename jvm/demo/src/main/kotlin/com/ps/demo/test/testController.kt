package com.ps.demo.test

import com.ps.data.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
class testController @Autowired constructor (val testRepo : TestRepoImplementation) {


    @GetMapping("/tests")
    fun getTest() : ResponseEntity<Test?> {
        val event : List<Test> = testRepo.getTest()
        return ResponseEntity(event[0], HttpStatus.OK)
    }

    @GetMapping("/test")
    fun getTestById() : ResponseEntity<Test?> {
        val test : Test? = testRepo.getTestById()
        return ResponseEntity(test, HttpStatus.OK)
    }

    @DeleteMapping("/test/{testId}")
    fun deleteTest(@PathVariable("testId") testId : Int) : ResponseEntity<Any?> {
        testRepo.deleteTest(testId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/test")
    fun createTest() : ResponseEntity<Any?> {
        val testKey : Int = testRepo.insertTest()
        return ResponseEntity(testKey, HttpStatus.OK)
    }
}






