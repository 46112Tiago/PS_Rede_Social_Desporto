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

    /******************************************  GET  ******************************************/

    /*
        Get a specific group based on the id
    */

    @GetMapping("/group/{groupId}")
    fun getGroupById(@PathVariable("groupId") groupId : Int) : ResponseEntity<Any> {
        val group : Group = groupService.getGroupById(groupId) ?: return ResponseEntity("Resource not found",NOT_FOUND)
        return ResponseEntity(group, HttpStatus.OK)
    }

    /* 
        Get all the participants in a group 
    */

    @GetMapping("/group/{groupId}/participant")
    fun getGroupParticipants(@PathVariable("groupId") groupId: Int) : ResponseEntity<List<User?>> {
        val users : List<User?> = groupService.getGroupParticipants(groupId)
        return ResponseEntity(users,HttpStatus.OK)
    }

    /* 
        Get all the friends that aren't part of the group 
    */

    @GetMapping("user/group/{groupId}/participant")
    fun getGroupNotParticipants(@PathVariable("groupId") groupId: Int,
                                @RequestParam() email : String) : ResponseEntity<List<User?>> {
        val userId = userService.getUserById(email)!!.userId
        val users : List<User?> = groupService.getGroupNotParticipants(groupId,userId!!)
        return ResponseEntity(users,HttpStatus.OK)
    }

    /* 
        Get the groups created by the user 
    */

    @GetMapping("/user/group")
    fun getUserGroups(@RequestParam() email : String) : ResponseEntity<List<Group?>> {
        val  userId = userService.getUserById(email)!!.userId
        val groups = groupService.getUserGroups(userId!!)
        return ResponseEntity(groups,HttpStatus.OK)
    }

    /******************************************  DELETE  ******************************************/

    /* 
        Delete a group 
    */

    @DeleteMapping("user/group/{groupId}")
    fun deleteGroup(@PathVariable("groupId") groupId : Int,
                    @RequestParam() email : String ) : ResponseEntity<String> {
        val userId = userService.getUserById(email)!!.userId
        groupService.deleteGroup(groupId,userId!!)
        return ResponseEntity("Group $groupId deleted",HttpStatus.OK)
    }

    /* 
        Exit the group 
    */

    @DeleteMapping("/group/{groupId}/user")
    fun exitGroup(@RequestParam() email : String,
                  @PathVariable("groupId") groupId: Int) : ResponseEntity<Any> {
        val userId = userService.getUserById(email)!!.userId
        groupService.exitGroup(groupId,userId!!)
        return ResponseEntity("Exit from group $groupId",HttpStatus.OK)
    }

    /* 
        Remove participants from a group 
    */

    @DeleteMapping("/group/{groupid}/participant/{participantName}")
    fun deleteGroupParticipant(@PathVariable("groupid") groupId : Int,
                               @PathVariable("participantName") participantName : String) : ResponseEntity<Any> {
        val userId = userService.getUserById(participantName)!!.userId
        val groups = groupService.deleteGroupParticipant(groupId,userId!!)
        return ResponseEntity("Participant $participantName removed from $groupId",HttpStatus.OK)
    }

    /******************************************  POST  ******************************************/
    
    /* 
        Create a group 
    */

    @PostMapping("/user/group")
    fun createGroup(
            @RequestParam() email : String,
            @RequestBody group: Group
    ) : ResponseEntity<Any> {
        val userId = userService.getUserById(email)!!.userId
        val groupId : Int? = groupService.insertGroup(userId!!,group)
        if (groupId == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(groupId, HttpStatus.OK)
    }

    /* 
        Add a friend as a participant in the group 
    */

    @PostMapping("/group/{groupid}/participant")
    fun insertGroupParticipant(@PathVariable("groupid") groupId: Int,
                               @RequestBody participants : List<String>): ResponseEntity<Any> {
        val participant = groupService.insertGroupParticipant(groupId,participants)
        return ResponseEntity("Participants inserted in $groupId",HttpStatus.OK)
    }
}
