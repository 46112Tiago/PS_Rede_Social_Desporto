package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import com.ps.data.User
import com.ps.demo.user.UserService
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
class PrivateMessageController(val privateMessageService: PrivateMessageService, val userService: UserService) {


    @Autowired
    var template: SimpMessagingTemplate? = null

    @GetMapping("/user/message/{receiverName}")
    fun getAllMessages(@RequestParam(required = false) email : String,
                       @PathVariable("receiverName") receiverName : String,
                       @RequestParam(required = false) page : Int
    ) : ResponseEntity<List<PrivateMessage?>?> {
        val  userId = userService.getUserById(email)!!.userId
        val receiverId = userService.getUserById(receiverName)!!.userId
        val privateMessages : List<PrivateMessage?>? = privateMessageService.getAllMessages(userId!!,receiverId!!,page)
        return ResponseEntity(privateMessages, HttpStatus.OK)
    }

    @PostMapping("/user/friend/{friendName}/message")
    fun sendMessage(@RequestParam(required = false) email : String,
                    @PathVariable("friendName") friendName: String,
                    @RequestBody privateMessage: PrivateMessage) : ResponseEntity<PrivateMessage?> {
        val  userId = userService.getUserById(email)!!.userId
        val friendId = userService.getUserById(friendName)!!.userId
        val privateMessageKey = privateMessageService.sendMessage(userId!!,friendId!!,privateMessage)
        val privateMessageResp = PrivateMessage(privateMessageKey,privateMessage.message,null,null,
            User(userId,"","","",null,"","",false,null,null,null))
        return ResponseEntity(privateMessageResp,HttpStatus.OK)
    }


    @MessageMapping("/private-message")
    fun recMessage(@Payload message: PrivateMessage): PrivateMessage? {
        val destination = message.receiver!!.email!!
        template!!.convertAndSendToUser(destination, "/private", message)
        return message
    }



}