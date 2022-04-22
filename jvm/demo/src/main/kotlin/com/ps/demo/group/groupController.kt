package com.ps.demo.group

import com.ps.data.Group
import com.ps.data.Test
import com.ps.data.User
import com.ps.demo.user.GroupRepoImplementation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.sql.Timestamp
import java.text.SimpleDateFormat

@RestController
@RequestMapping
class GroupController @Autowired constructor (val groupRepo : GroupRepoImplementation) {


    @GetMapping("/groups")
    fun getGroups() : ResponseEntity<List<Group?>> {
        val groups = groupRepo.getGroups()
        return ResponseEntity(groups, HttpStatus.OK)
    }

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

    @PostMapping("/group")
    fun createGroup() : ResponseEntity<Any?> {
        val group = Group(
            null,
            null,
            "Group",
            1
        )
        val userKey : Int? = groupRepo.insertGroup(group)
        return ResponseEntity(userKey, HttpStatus.OK)
    }

    @DeleteMapping("/group/{groupid}/participant/{participantid}")
    fun deleteGroupParticipant(@PathVariable("groupid") groupId : Int, @PathVariable("participantid") userId : Int ) : ResponseEntity<Any?> {
        val groups = groupRepo.deleteGroupParticipant(groupId,userId)
        return ResponseEntity(groups,HttpStatus.OK)
    }

    @PostMapping("/group/{groupid}/participant/{userid}")
    fun createGroupParticipant(@PathVariable("groupid") groupId: Int, @PathVariable("userid") userId : Int): ResponseEntity<Int?> {
        val participant = groupRepo.insertGroupParticipant(groupId,userId)
        return ResponseEntity(participant,HttpStatus.OK)
    }

    @GetMapping("/group/user/{userid}")
    fun getUserGroups(@PathVariable("userid") userId: Int) : ResponseEntity<Any?> {
        val groups = groupRepo.getUserGroups(userId)
        return ResponseEntity(groups,HttpStatus.OK)
    }
}
