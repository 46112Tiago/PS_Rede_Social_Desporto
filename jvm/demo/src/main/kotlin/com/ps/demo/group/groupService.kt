package com.ps.demo.group

import com.ps.data.Group
import com.ps.data.User

interface GroupService {

    fun getGroups() : List<Group?>

    fun getGroupById(groupId : Int) : Group?

    fun getGroupParticipants(groupId : Int) : List<User?>

    //fun getGroupParticipantById(groupId : Int, userId : Int) : User?

    fun getUserGroups(userId: Int) : List<Group?>

    fun deleteGroup(groupId : Int)

    fun insertGroup(group : Group) : Int?

    fun insertGroupParticipant(groupId : Int, userId : Int)

    fun deleteGroupParticipant(groupId: Int,userId: Int) : Int


}
