package com.ps.demo.groupMessage

import com.ps.data.GroupMessage
import com.ps.demo.removeWhitespaces
import org.springframework.stereotype.Service

@Service
class GroupMessageService(val groupMsgRepo : GroupMessageRepoImplementation) {

    //TODO: get a limit number of messages
    fun getAllMessages(userId : Int, groupId : Int) : List<GroupMessage?> {
        return groupMsgRepo.getAllMessages(userId,groupId)
    }

    fun sendMessage(userId : Int, groupId : Int,groupMessage: GroupMessage) : Int? {
        //Check if the values have been introduced correctly
        val messageTxt =  removeWhitespaces(groupMessage.message)
        if (groupMessage.message.isEmpty() || groupMessage.message.length > 400 || messageTxt.isEmpty())
            return -1
        return groupMsgRepo.sendMessage(userId,groupId,groupMessage)
    }

}
