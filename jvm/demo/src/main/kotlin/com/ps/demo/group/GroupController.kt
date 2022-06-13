package com.ps.demo.group

import com.ps.data.Group
import com.ps.data.User
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class GroupController (val groupService: GroupService) {

    @GetMapping("/group/{groupId}")
    fun getGroupById(@PathVariable("groupId") groupId : Int) : ResponseEntity<Group?> {
        val group : Group? = groupService.getGroupById(groupId)
        return ResponseEntity(group, HttpStatus.OK)
    }

    @GetMapping("/group/{groupId}/participant")
    fun getGroupParticipants(@PathVariable("groupId") groupId: Int) : ResponseEntity<List<User?>> {
        val users : List<User?> = groupService.getGroupParticipants(groupId)
        return ResponseEntity(users,HttpStatus.OK)
    }

    @GetMapping("user/{userId}/group/{groupId}/participant")
    fun getGroupNotParticipants(@PathVariable("groupId") groupId: Int,
                                @PathVariable("userId") userId: Int) : ResponseEntity<List<User?>> {
        val users : List<User?> = groupService.getGroupNotParticipants(groupId,userId)
        return ResponseEntity(users,HttpStatus.OK)
    }

    @DeleteMapping("user/{userId}/group/{groupId}")
    fun deleteGroup(@PathVariable("groupId") groupId : Int,
                    @PathVariable("userId") userId: Int ) : ResponseEntity<Any?> {
        groupService.deleteGroup(groupId,userId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/group")
    fun createGroup(
            @PathVariable("userId") userId: Int,
            @RequestBody group: Group
    ) : ResponseEntity<Any?> {

        val userKey : Int? = groupService.insertGroup(userId,group)
        return ResponseEntity(userKey, HttpStatus.OK)
    }

    @DeleteMapping("/group/{groupid}/participant/{participantid}")
    fun deleteGroupParticipant(@PathVariable("groupid") groupId : Int, @PathVariable("participantid") userId : Int ) : ResponseEntity<Any?> {
        val groups = groupService.deleteGroupParticipant(groupId,userId)
        return ResponseEntity(groups,HttpStatus.OK)
    }

    @PostMapping("/group/{groupid}/participant")
    fun insertGroupParticipant(@PathVariable("groupid") groupId: Int,
                               @RequestBody participantsId : List<String>): ResponseEntity<Any?> {
        val participant = groupService.insertGroupParticipant(groupId,participantsId)
        return ResponseEntity(participant,HttpStatus.OK)
    }

    @GetMapping("/user/{userid}/group")
    fun getUserGroups(@PathVariable("userid") userId: Int) : ResponseEntity<Any?> {
        val groups = groupService.getUserGroups(userId)
        return ResponseEntity(groups,HttpStatus.OK)
    }

    @DeleteMapping("/group/{groupId}/user/{userid}")
    fun exitGroup(@PathVariable("userid") userId: Int,
                  @PathVariable("groupId") groupId: Int) : ResponseEntity<Any?> {
        groupService.exitGroup(groupId,userId)
        return ResponseEntity(HttpStatus.OK)
    }
}
