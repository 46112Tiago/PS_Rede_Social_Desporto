package com.ps.demo.groupMessage

import com.ps.data.GroupMessage

interface GroupMessageService {

    //TODO: get a limit number of messages
    fun getAllMessages(userId : Int, groupId : Int) : List<GroupMessage>?

    fun sendMessage(userId : Int, groupId : Int,groupMessage: GroupMessage) : Int?

}
