package com.ps.demo.group

import com.ps.data.Group
import com.ps.data.User

interface GroupService {

    fun getGroupById(groupId : Int) : Group?

    fun getGroupParticipants(groupId : Int) : List<User?>

    fun getUserGroups(userId: Int) : List<Group?>

    fun deleteGroup(groupId : Int)

    fun insertGroup(userId : Int, group : Group) : Int?

    fun insertGroupParticipant(groupId : Int, userId : Int)

    fun deleteGroupParticipant(groupId: Int,userId: Int) : Int


}
