package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.Header
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.web.bind.annotation.*
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.web.bind.annotation.RequestBody

import org.springframework.web.bind.annotation.PostMapping
import java.lang.Exception
import java.text.SimpleDateFormat

import java.security.Principal










@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class PrivateMessageController(val privateMessageService: PrivateMessageService) {


    @Autowired
    var template: SimpMessagingTemplate? = null

    @GetMapping("/user/{userId}/message/{receiverId}")
    fun getAllMessages(@PathVariable("userId") userId : Int,
    @PathVariable("receiverId") receiverId : Int
    ) : ResponseEntity<List<PrivateMessage?>?> {
        val privateMessages : List<PrivateMessage?>? = privateMessageService.getAllMessages(userId,receiverId)
        return ResponseEntity(privateMessages, HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/friend/{friendId}/message")
    fun sendMessage(@PathVariable("userId") userId : Int,
                    @PathVariable("friendId") friendId: Int,
                    @RequestBody privateMessage: PrivateMessage) : ResponseEntity<PrivateMessage?> {
        val privateMessageKey = privateMessageService.sendMessage(userId,friendId,privateMessage)
        val privateMessageResp = PrivateMessage(privateMessageKey,"",null,null,null)
        return ResponseEntity(privateMessageResp,HttpStatus.OK)
    }

    @SendTo("/topic/message")
    fun broadcastMessage(@Payload privateMessage: PrivateMessage?): PrivateMessage? {
        return privateMessage
    }

    @MessageMapping("/sendMessage")
    @Throws(Exception::class)
    fun sendSpecific(
        @RequestBody privateMessage: PrivateMessage?,
    ) {
        template!!.convertAndSendToUser(
            privateMessage!!.receiver!!.userId.toString(), "/queue/specific-user", privateMessage.message!!
        )
    }


}