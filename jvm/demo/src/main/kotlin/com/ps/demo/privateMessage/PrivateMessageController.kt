package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping()
class PrivateMessageController(val privateMessageRepo : PrivateMessageRepoImplementation) {

    @GetMapping("/user/{userId}/privateMessage")
    fun getAllMessages(@PathVariable("userId") userId : Int) : ResponseEntity<List<PrivateMessage>?> {
        val locations : List<PrivateMessage>? = privateMessageRepo.getAllMessages(userId)
        return ResponseEntity(locations, HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/privateMessage")
    fun createCompound(@RequestBody privateMessage: PrivateMessage) : ResponseEntity<Any?> {
        val compoundKey = privateMessageRepo.sendMessage(privateMessage)
        return ResponseEntity(compoundKey, HttpStatus.OK)
    }


}