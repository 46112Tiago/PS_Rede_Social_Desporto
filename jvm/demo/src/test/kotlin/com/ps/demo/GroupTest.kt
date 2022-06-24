package com.ps.demo

import com.ps.data.Group
import com.ps.data.User
import com.ps.demo.group.GroupController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import kotlin.math.absoluteValue

@SpringBootTest
class GroupTest {

    @Autowired
    var groupController : GroupController? = null

    @Test
    fun createAndRemoveGroup(){
        val group = Group(null,null,"Test Group",null,mutableListOf<User>())
        val groupResponse = groupController!!.createGroup("projeto.seminario2022",group)
        val groupId = groupResponse.body!!.absoluteValue
        Assertions.assertNotNull(groupId)
        groupController!!.deleteGroup(groupId,"projeto.seminario2022")
        val getGroup = groupController!!.getGroupById(groupId)
        Assertions.assertEquals(HttpStatus.NOT_FOUND,getGroup.statusCode)
    }

    @Test
    fun createGroupWithoutName(){
        val group = Group(null,null,"",null,mutableListOf<User>())
        val groupResponse = groupController!!.createGroup("projeto.seminario2022",group)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,groupResponse.statusCode)
    }

    @Test
    fun createGroupNameWithOnlyWhitespace(){
        val group = Group(null,null,"                    ",null,mutableListOf<User>())
        val groupResponse = groupController!!.createGroup("projeto.seminario2022",group)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,groupResponse.statusCode)
    }

    @Test
    fun insertAndRemoveGroupParticipants(){
        val participants = listOf<String>("NorthMarcus")
        val beforeInsert = groupController!!.getGroupParticipants(1)
        groupController!!.insertGroupParticipant(1,participants)
        val afterInsert = groupController!!.getGroupParticipants(1)
        Assertions.assertEquals(beforeInsert.body!!.size + participants.size, afterInsert.body!!.size)
        groupController!!.deleteGroupParticipant(1,"NorthMarcus")
        val getGroupParticipants = groupController!!.getGroupParticipants(1)
        Assertions.assertEquals(beforeInsert,getGroupParticipants)
    }

    @Test
    fun checkGroupParticipants(){
        val participants = listOf<String>("NorthMarcus")
        val beforeInsertParticipants = groupController!!.getGroupParticipants(1)
        val beforeInsertNotParticipants = groupController!!.getGroupNotParticipants(1,"projeto.seminario2022")
        groupController!!.insertGroupParticipant(1,participants)
        val afterInsert = groupController!!.getGroupParticipants(1)
        val afterInsertNotParticipants = groupController!!.getGroupNotParticipants(1,"projeto.seminario2022")
        Assertions.assertEquals(beforeInsertParticipants.body!!.size + participants.size, afterInsert.body!!.size)
        Assertions.assertEquals(beforeInsertNotParticipants.body!!.size - participants.size, afterInsertNotParticipants.body!!.size)
        groupController!!.deleteGroupParticipant(1,"NorthMarcus")
        val getGroupParticipants = groupController!!.getGroupParticipants(1)
        val getGroupNotParticipants = groupController!!.getGroupNotParticipants(1,"projeto.seminario2022")
        Assertions.assertEquals(beforeInsertParticipants,getGroupParticipants)
        Assertions.assertEquals(beforeInsertNotParticipants,getGroupNotParticipants)
    }

    @Test
    fun checkExitGroup(){
        val beforeInsertParticipants = groupController!!.getGroupParticipants(3)
        groupController!!.exitGroup("projeto.seminario2022",3)
        val afterInsert = groupController!!.getGroupParticipants(1)
        Assertions.assertEquals(beforeInsertParticipants.body!!.size - 1 , afterInsert.body!!.size)
        groupController!!.insertGroupParticipant(3, listOf("projeto.seminario2022"))
        val getGroupParticipants = groupController!!.getGroupParticipants(3)
        Assertions.assertEquals(beforeInsertParticipants,getGroupParticipants)
    }

}