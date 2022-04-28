package com.ps.demo.groupMessage

import com.ps.data.GroupMessage
import com.ps.demo.privateMessage.GroupMessageRepoImplementation
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
class GroupMessageController(val groupMessageRepo : GroupMessageRepoImplementation) {

    @GetMapping("/user/{userId}/group/{groupId}/messages")
    fun getAllMessages(@PathVariable("userId") userId : Int,
                       @PathVariable("groupId") groupId : Int
    ) : ResponseEntity<List<GroupMessage>?> {
        val groupMessages : List<GroupMessage>? = groupMessageRepo.getAllMessages(userId,groupId)
        return ResponseEntity(groupMessages, HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/group/{groupId}/messages")
    fun sendMessage(@PathVariable("userId") userId : Int,
                    @PathVariable("groupId") groupId : Int,
                    @RequestBody groupMessage: GroupMessage) : ResponseEntity<Any?> {
        val groupMessageKey = groupMessageRepo.sendMessage(userId,groupId, groupMessage )
        return ResponseEntity(groupMessageKey, HttpStatus.OK)
    }


}