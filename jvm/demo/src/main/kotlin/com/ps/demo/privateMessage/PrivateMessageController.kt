package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.web.bind.annotation.*
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.web.bind.annotation.RequestBody

import org.springframework.web.bind.annotation.PostMapping







@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class PrivateMessageController(val privateMessageService: PrivateMessageService) {


    @Autowired
    var template: SimpMessagingTemplate? = null

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
        if (privateMessage != null) {
            template?.convertAndSend("/topic/message", privateMessage)
        }
        return ResponseEntity(HttpStatus.OK)
    }

    @MessageMapping("/sendMessage")
    fun receiveMessage(@Payload privateMessage: PrivateMessage?) {
        // receive message from client
    }


    @SendTo("/topic/message")
    fun broadcastMessage(@Payload privateMessage: PrivateMessage?): PrivateMessage? {
        return privateMessage
    }


}