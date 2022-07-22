package com.ps.demo.groupMessage

import com.ps.data.GroupMessage
import com.ps.demo.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin("\${cors}")
class GroupMessageController(val groupMsgService : GroupMessageService, val userService: UserService) {

    /******************************************  GET  ******************************************/

    /* 
        Get the group messages 
    */

    @GetMapping("/user/group/{groupId}/message")
    fun getAllMessages(@RequestParam() email : String,
                       @PathVariable("groupId") groupId : Int
    ) : ResponseEntity<List<GroupMessage?>> {
        val  userId = userService.getUserById(email)!!.userId
        val groupMessages : List<GroupMessage?> = groupMsgService.getAllMessages(userId!!,groupId)
        return ResponseEntity(groupMessages, HttpStatus.OK)
    }

    /******************************************  POST  ******************************************/

    /* 
        Add a new message to the group 
    */

    @PostMapping("/user/group/{groupId}/message")
    fun sendMessage(@RequestParam() email : String,
                    @PathVariable("groupId") groupId : Int,
                    @RequestBody groupMessage: GroupMessage) : ResponseEntity<Any> {
        val  userId = userService.getUserById(email)!!.userId
        val groupMessageKey = groupMsgService.sendMessage(userId!!,groupId, groupMessage )
        if (groupMessageKey == -1) return ResponseEntity("Bad request",HttpStatus.BAD_REQUEST)
        return ResponseEntity(groupMessageKey, HttpStatus.OK)
    }


}