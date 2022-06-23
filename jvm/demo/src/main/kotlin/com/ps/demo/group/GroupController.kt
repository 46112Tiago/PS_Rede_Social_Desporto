package com.ps.demo.group

import com.ps.data.Group
import com.ps.data.User
import com.ps.demo.user.UserService
import org.apache.coyote.Response
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class GroupController (val groupService: GroupService, val userService: UserService) {

    @GetMapping("/group/{groupId}")
    fun getGroupById(@PathVariable("groupId") groupId : Int) : ResponseEntity<Group?> {
        val group : Group? = groupService.getGroupById(groupId) ?: return ResponseEntity(NOT_FOUND)
        return ResponseEntity(group, HttpStatus.OK)
    }

    @GetMapping("/group/{groupId}/participant")
    fun getGroupParticipants(@PathVariable("groupId") groupId: Int) : ResponseEntity<List<User?>> {
        val users : List<User?> = groupService.getGroupParticipants(groupId)
        return ResponseEntity(users,HttpStatus.OK)
    }

    @GetMapping("user/group/{groupId}/participant")
    fun getGroupNotParticipants(@PathVariable("groupId") groupId: Int,
                                @RequestParam(required = false) email : String) : ResponseEntity<List<User?>> {
        val userId = userService.getUserById(email)!!.userId
        val users : List<User?> = groupService.getGroupNotParticipants(groupId,userId!!)
        return ResponseEntity(users,HttpStatus.OK)
    }

    @DeleteMapping("user/group/{groupId}")
    fun deleteGroup(@PathVariable("groupId") groupId : Int,
                    @RequestParam(required = false) email : String ) : ResponseEntity<Any?> {
        val userId = userService.getUserById(email)!!.userId
        groupService.deleteGroup(groupId,userId!!)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user/group")
    fun createGroup(
            @RequestParam(required = false) email : String,
            @RequestBody group: Group
    ) : ResponseEntity<Int?> {
        val userId = userService.getUserById(email)!!.userId
        val groupId : Int? = groupService.insertGroup(userId!!,group)
        if (groupId == -1) return ResponseEntity(BAD_REQUEST)
        return ResponseEntity(groupId, HttpStatus.OK)
    }

    @DeleteMapping("/group/{groupid}/participant/{participantName}")
    fun deleteGroupParticipant(@PathVariable("groupid") groupId : Int,
                               @PathVariable("participantName") participantName : String) : ResponseEntity<Any?> {
        val userId = userService.getUserById(participantName)!!.userId
        val groups = groupService.deleteGroupParticipant(groupId,userId!!)
        return ResponseEntity(groups,HttpStatus.OK)
    }

    @PostMapping("/group/{groupid}/participant")
    fun insertGroupParticipant(@PathVariable("groupid") groupId: Int,
                               @RequestBody participants : List<String>): ResponseEntity<Any?> {
        val participant = groupService.insertGroupParticipant(groupId,participants)
        return ResponseEntity(participant,HttpStatus.OK)
    }

    @GetMapping("/user/group")
    fun getUserGroups(@RequestParam(required = false) email : String) : ResponseEntity<Any?> {
        val  userId = userService.getUserById(email)!!.userId
        val groups = groupService.getUserGroups(userId!!)
        return ResponseEntity(groups,HttpStatus.OK)
    }

    @DeleteMapping("/group/{groupId}/user")
    fun exitGroup(@RequestParam(required = false) email : String,
                  @PathVariable("groupId") groupId: Int) : ResponseEntity<Any?> {
        val userId = userService.getUserById(email)!!.userId
        groupService.exitGroup(groupId,userId!!)
        return ResponseEntity(HttpStatus.OK)
    }
}
