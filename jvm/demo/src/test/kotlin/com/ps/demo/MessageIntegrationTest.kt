package com.ps.demo

import com.ps.data.Comment
import com.ps.data.GroupMessage
import com.ps.data.PrivateMessage
import com.ps.data.User
import com.ps.demo.groupMessage.GroupMessageController
import com.ps.demo.privateMessage.PrivateMessageController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import java.sql.Timestamp
import java.time.LocalDateTime

@SpringBootTest
class MessageIntegrationTest {

    @Autowired
    var privateMessageController: PrivateMessageController? = null
    @Autowired
    var groupMessageController: GroupMessageController? = null


    @Test
    fun sendPrivateMessageWithOnlyWhitespace(){
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val privateMessage = PrivateMessage(null,"                  ",timestamp,null,null)
        val messageResponse = privateMessageController!!.sendMessage("projeto.seminario2022","joanaG",privateMessage)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,messageResponse.statusCode)
    }

    @Test
    fun sendPrivateMessageWithoutText(){
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val privateMessage = PrivateMessage(null,"",timestamp,null,null)
        val messageResponse = privateMessageController!!.sendMessage("projeto.seminario2022","joanaG",privateMessage)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,messageResponse.statusCode)
    }

    @Test
    fun sendPrivateMessageWithTooManyCharacters(){
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val privateMessage = PrivateMessage(null,"Test send private message with too many characters.Test send private message with too many characters." +
                "Test send private message with too many characters.Test send private message with too many characters." +
                "Test send private message with too many characters.Test send private message with too many characters." +
                "Test send private message with too many characters.Test send private message with too many characters.",timestamp,null,null)
        val messageResponse = privateMessageController!!.sendMessage("projeto.seminario2022","joanaG",privateMessage)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,messageResponse.statusCode)
    }

    @Test
    fun sendGroupMessageWithOnlyWhitespace(){
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val groupMessage = GroupMessage(null,2,null,timestamp,"                  ")
        val messageResponse = groupMessageController!!.sendMessage("projeto.seminario2022",2, groupMessage)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,messageResponse.statusCode)
    }

    @Test
    fun sendGroupMessageWithoutText(){
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val groupMessage = GroupMessage(null,2,null,timestamp,"")
        val messageResponse = groupMessageController!!.sendMessage("projeto.seminario2022",2,groupMessage)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,messageResponse.statusCode)
    }

    @Test
    fun sendGroupMessageWithTooManyCharacters(){
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val groupMessage = GroupMessage(null,2,null,timestamp,"Test send group message with too many characters. Test send group message with too many characters." +
                "Test send group message with too many characters. Test send group message with too many characters." +
                "Test send group message with too many characters. Test send group message with too many characters." +
                "Test send group message with too many characters. Test send group message with too many characters." +
                "Test send group message with too many characters. Test send group message with too many characters.")
        val messageResponse = groupMessageController!!.sendMessage("projeto.seminario2022",2,groupMessage)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,messageResponse.statusCode)
    }


}