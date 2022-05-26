package com.ps.demo.groupMessage

import com.ps.data.GroupMessage
import org.springframework.stereotype.Service

@Service
class GroupMessageService(val groupMsgRepo : GroupMessageRepoImplementation) {

    //TODO: get a limit number of messages
    fun getAllMessages(userId : Int, groupId : Int) : List<GroupMessage?> {
        return groupMsgRepo.getAllMessages(userId,groupId)
    }

    fun sendMessage(userId : Int, groupId : Int,groupMessage: GroupMessage) : Int? {
        return groupMsgRepo.sendMessage(userId,groupId,groupMessage)
    }

}
