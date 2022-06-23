package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import org.springframework.stereotype.Service

@Service
class PrivateMessageService(val privateMessageRepo : PrivateMessageRepoImplementation) {

    //TODO: get a limit number of messages
    fun getAllMessages(userId : Int,receiverId : Int, page: Int) : List<PrivateMessage?>? {
        return privateMessageRepo.getAllMessages(userId, receiverId, page)
    }

    fun sendMessage(userId : Int,receiverId : Int,privateMessage: PrivateMessage) : Int? {
        val messageTxt =  privateMessage.message.replace("\\s".toRegex(), "")
        if (privateMessage.message.isEmpty() || privateMessage.message.length > 400 || messageTxt.isEmpty())
            return -1
        return privateMessageRepo.sendMessage(userId, receiverId, privateMessage)
    }

}
