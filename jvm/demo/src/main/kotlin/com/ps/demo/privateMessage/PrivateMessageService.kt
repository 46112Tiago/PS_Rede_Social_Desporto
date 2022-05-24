package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage
import org.springframework.stereotype.Service

@Service
class PrivateMessageService(val privateMessageRepo : PrivateMessageRepoImplementation) {

    //TODO: get a limit number of messages
    fun getAllMessages(userId : Int,receiverId : Int) : List<PrivateMessage>? {
        return privateMessageRepo.getAllMessages(userId, receiverId)
    }

    fun sendMessage(userId : Int,receiverId : Int,privateMessage: PrivateMessage) : Int? {
        return privateMessageRepo.sendMessage(userId, receiverId, privateMessage)
    }

}
