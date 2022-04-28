package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping()
class PrivateMessageController(val privateMessageRepo : PrivateMessageRepoImplementation) {

    @GetMapping("/user/{userId}/message/{receiverId}")
    fun getAllMessages(@PathVariable("userId") userId : Int,
    @PathVariable("receiverId") receiverId : Int
    ) : ResponseEntity<List<PrivateMessage>?> {
        val privateMessages : List<PrivateMessage>? = privateMessageRepo.getAllMessages(userId,receiverId)
        return ResponseEntity(privateMessages, HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/message/{receiverId}")
    fun sendMessage(@PathVariable("userId") userId : Int,
                    @PathVariable("receiverId") receiverId: Int,
            @RequestBody privateMessage: PrivateMessage) : ResponseEntity<Any?> {
        val privateMessageKey = privateMessageRepo.sendMessage(userId,receiverId,privateMessage)
        return ResponseEntity(privateMessageKey, HttpStatus.OK)
    }


}