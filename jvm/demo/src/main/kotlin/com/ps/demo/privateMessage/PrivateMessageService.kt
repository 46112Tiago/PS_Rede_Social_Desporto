package com.ps.demo.privateMessage

import com.ps.data.PrivateMessage

interface PrivateMessageService {

    //TODO: get a limit number of messages
    fun getAllMessages(userId : Int) : List<PrivateMessage>?

    fun sendMessage(privateMessage: PrivateMessage) : Int?

}
