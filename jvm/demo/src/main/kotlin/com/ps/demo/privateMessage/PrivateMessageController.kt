package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.web.bind.annotation.*
import org.springframework.messaging.simp.SimpMessagingTemplate

@RestController
@RequestMapping
@CrossOrigin("https://localhost:3000")
class PrivateMessageController(val privateMessageService: PrivateMessageService) {

    @GetMapping("/user/{userId}/message/{receiverId}")
    fun getAllMessages(@PathVariable("userId") userId : Int,
    @PathVariable("receiverId") receiverId : Int
    ) : ResponseEntity<List<PrivateMessage>?> {
        val privateMessages : List<PrivateMessage>? = privateMessageService.getAllMessages(userId,receiverId)
        return ResponseEntity(privateMessages, HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/friend/{friendId}/message")
    fun sendMessage(@PathVariable("userId") userId : Int,
                    @PathVariable("friendId") friendId: Int,
                    @RequestBody privateMessage: PrivateMessage) : ResponseEntity<Any?> {
        val privateMessageKey = privateMessageService.sendMessage(userId,friendId,privateMessage)
        return ResponseEntity(privateMessageKey, HttpStatus.OK)
    }


}