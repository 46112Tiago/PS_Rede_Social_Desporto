package com.ps.demo.groupMessage

import com.ps.data.GroupMessage
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin("https://localhost:3000")
class GroupMessageController(val groupMsgService : GroupMessageService) {

    @GetMapping("/user/{userId}/group/{groupId}/message")
    fun getAllMessages(@PathVariable("userId") userId : Int,
                       @PathVariable("groupId") groupId : Int
    ) : ResponseEntity<List<GroupMessage?>> {
        val groupMessages : List<GroupMessage?> = groupMsgService.getAllMessages(userId,groupId)
        return ResponseEntity(groupMessages, HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/group/{groupId}/message")
    fun sendMessage(@PathVariable("userId") userId : Int,
                    @PathVariable("groupId") groupId : Int,
                    @RequestBody groupMessage: GroupMessage) : ResponseEntity<Any?> {
        val groupMessageKey = groupMsgService.sendMessage(userId,groupId, groupMessage )
        return ResponseEntity(groupMessageKey, HttpStatus.OK)
    }


}