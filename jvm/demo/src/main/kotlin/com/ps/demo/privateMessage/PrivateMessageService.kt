package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage

interface PrivateMessageService {

    //TODO: get a limit number of messages
    fun getAllMessages(userId : Int,receiverId : Int) : List<PrivateMessage>?

    fun sendMessage(userId : Int,receiverId : Int,privateMessage: PrivateMessage) : Int?

}
