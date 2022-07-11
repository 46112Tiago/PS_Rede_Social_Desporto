package com.ps.demo.websocket

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


@RestController
class WebSocketMessageController {
    @Autowired
    var template: SimpMessagingTemplate? = null
    @PostMapping("/send")
    fun sendMessage(@RequestBody messageDTO: MessageDTO): ResponseEntity<Void> {
        template!!.convertAndSend("/topic/message", messageDTO!!)
        return ResponseEntity(HttpStatus.OK)
    }

    @MessageMapping("/sendMessage")
    fun receiveMessage(@Payload messageDTO: MessageDTO?) {
        // receive message from client
    }

    @SendTo("/topic/message")
    fun broadcastMessage(@Payload messageDTO: MessageDTO): MessageDTO {
        return messageDTO
    }
}