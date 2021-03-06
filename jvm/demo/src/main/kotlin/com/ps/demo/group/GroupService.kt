package com.ps.demo.group

import com.ps.data.Group
import com.ps.data.User
import com.ps.demo.removeWhitespaces
import com.ps.demo.user.GroupRepoImplementation
import com.ps.demo.user.UserRepoImplementation
import org.springframework.stereotype.Service

@Service
class GroupService(val groupRepo : GroupRepoImplementation, val userRepo: UserRepoImplementation) {

    fun getGroupById(groupId : Int) : Group? {
        return groupRepo.getGroupById(groupId)
    }

    fun getGroupParticipants(groupId : Int) : List<User?> {
        return groupRepo.getGroupParticipants(groupId)
    }

    fun getGroupNotParticipants(groupId : Int, userId: Int) : List<User?> {
        return groupRepo.getGroupNotParticipants(groupId, userId)
    }

    fun getUserGroups(userId: Int) : List<Group?> {
        return groupRepo.getUserGroups(userId)
    }

    fun deleteGroup(groupId : Int, userId : Int) {
        return groupRepo.deleteGroup(groupId,userId)
    }

    fun insertGroup(userId : Int, group : Group) : Int? {
        //Check if the values have been introduced correctly
        val groupName =  removeWhitespaces(group.name)
        if (group.name.isEmpty() || groupName.isEmpty()) return -1
        return groupRepo.insertGroup(userId,group)
    }

    fun insertGroupParticipant(groupId : Int, participantsId : List<String>) {
        //Iterates from a list of users and add them as participants in the group 
        for (participantName: String in participantsId) {
            val participantId = userRepo.getUserById(participantName)!!.userId
            groupRepo.insertGroupParticipant(groupId, participantId!!)
        }
    }

    fun deleteGroupParticipant(groupId: Int,userId: Int) : Int {
        return groupRepo.deleteGroupParticipant(groupId, userId)
    }

    fun exitGroup(groupId: Int, userId: Int) {
        return groupRepo.exitGroup(groupId,userId)
    }

}
