package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import com.ps.data.User
import com.ps.demo.user.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
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
@CrossOrigin("\${cors}")
class PrivateMessageController(val privateMessageService: PrivateMessageService, val userService: UserService) {


    @Autowired
    var template: SimpMessagingTemplate? = null

    /******************************************  GET  ******************************************/

    @GetMapping("/user/message/{receiverName}")
    fun getAllMessages(@RequestParam() email : String,
                       @PathVariable("receiverName") receiverName : String,
                       @RequestParam() page : Int
    ) : ResponseEntity<List<PrivateMessage?>?> {
        val  userId = userService.getUserById(email)!!.userId
        val receiverId = userService.getUserById(receiverName)!!.userId
        val privateMessages : List<PrivateMessage?>? = privateMessageService.getAllMessages(userId!!,receiverId!!,page)
        return ResponseEntity(privateMessages, HttpStatus.OK)
    }

    /******************************************  POST  ******************************************/

    @PostMapping("/user/friend/{friendName}/message")
    fun sendMessage(@RequestParam() email : String,
                    @PathVariable("friendName") friendName: String,
                    @RequestBody privateMessage: PrivateMessage) : ResponseEntity<Any> {
        val  userId = userService.getUserById(email)!!.userId
        val friendId = userService.getUserById(friendName)!!.userId
        val privateMessageKey = privateMessageService.sendMessage(userId!!,friendId!!,privateMessage)
        if (privateMessageKey == -1) return ResponseEntity("Bad request", BAD_REQUEST)
        val privateMessageResp = PrivateMessage(privateMessageKey,privateMessage.message,null,null,
            User(userId,"","","",null,"","",false,null,null,null))
        return ResponseEntity(privateMessageResp,HttpStatus.OK)
    }


    //Based on: https://github.com/JayaramachandranAugustin/ChatApplication    2022-06-18

    @MessageMapping("/private-message")
    fun recMessage(@Payload message: PrivateMessage): PrivateMessage? {
        val destination = message.receiver!!.email!!
        template!!.convertAndSendToUser(destination, "/private", message)
        return message
    }

}