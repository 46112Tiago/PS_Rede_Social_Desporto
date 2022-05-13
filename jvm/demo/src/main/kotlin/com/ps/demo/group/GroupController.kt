package com.ps.demo.group

import com.ps.data.Group
import com.ps.data.User
import com.ps.demo.user.GroupRepoImplementation
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class GroupController (val groupRepo : GroupRepoImplementation) {

    @GetMapping("/group/{groupId}")
    fun getGroupById(@PathVariable("groupId") groupId : Int) : ResponseEntity<Group?> {
        val group : Group? = groupRepo.getGroupById(groupId)
        return ResponseEntity(group, HttpStatus.OK)
    }

    @GetMapping("/group/{groupId}/participants")
    fun getGroupParticipants(@PathVariable("groupId") groupId: Int) : ResponseEntity<List<User?>> {
        val users : List<User?> = groupRepo.getGroupParticipants(groupId)
        return ResponseEntity(users,HttpStatus.OK)
    }

    @DeleteMapping("/group/{groupId}")
    fun deleteGroup(@PathVariable("groupId") groupId : Int) : ResponseEntity<Any?> {
        groupRepo.deleteGroup(groupId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/group")
    fun createGroup(
            @PathVariable("userId") userId: Int,
            @RequestBody group: Group
    ) : ResponseEntity<Any?> {

        val userKey : Int? = groupRepo.insertGroup(userId,group)
        return ResponseEntity(userKey, HttpStatus.OK)
    }

    @DeleteMapping("/group/{groupid}/participant/{participantid}")
    fun deleteGroupParticipant(@PathVariable("groupid") groupId : Int, @PathVariable("participantid") userId : Int ) : ResponseEntity<Any?> {
        val groups = groupRepo.deleteGroupParticipant(groupId,userId)
        return ResponseEntity(groups,HttpStatus.OK)
    }

    @PostMapping("/group/{groupid}/participant/{userid}")
    fun createGroupParticipant(@PathVariable("groupid") groupId: Int, @PathVariable("userid") userId : Int): ResponseEntity<Any?> {
        val participant = groupRepo.insertGroupParticipant(groupId,userId)
        return ResponseEntity(participant,HttpStatus.OK)
    }

    @GetMapping("/user/{userid}/group")
    fun getUserGroups(@PathVariable("userid") userId: Int) : ResponseEntity<Any?> {
        val groups = groupRepo.getUserGroups(userId)
        return ResponseEntity(groups,HttpStatus.OK)
    }
}