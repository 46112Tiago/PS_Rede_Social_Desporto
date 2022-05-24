package com.ps.demo.group

import com.ps.data.Group
import com.ps.data.User
import com.ps.demo.user.GroupRepoImplementation
import org.springframework.stereotype.Service

@Service
class GroupService(val groupRepo : GroupRepoImplementation) {

    fun getGroupById(groupId : Int) : Group? {
        return groupRepo.getGroupById(groupId)
    }

    fun getGroupParticipants(groupId : Int) : List<User?> {
        return groupRepo.getGroupParticipants(groupId)
    }

    fun getUserGroups(userId: Int) : List<Group?> {
        return groupRepo.getUserGroups(userId)
    }

    fun deleteGroup(groupId : Int, userId : Int) {
        return groupRepo.deleteGroup(groupId,userId)
    }

    fun insertGroup(userId : Int, group : Group) : Int? {
        return groupRepo.insertGroup(userId,group)
    }

    fun insertGroupParticipant(groupId : Int, participantsId : List<String>) {
        return groupRepo.insertGroupParticipant(groupId, participantsId)
    }

    fun deleteGroupParticipant(groupId: Int,userId: Int) : Int {
        return groupRepo.deleteGroupParticipant(groupId, userId)
    }

    fun exitGroup(groupId: Int, userId: Int) {
        return groupRepo.exitGroup(groupId,userId)
    }

}
