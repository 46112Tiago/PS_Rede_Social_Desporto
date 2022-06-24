package com.ps.demo

import com.ps.data.Compound
import com.ps.data.LookingPlayers
import com.ps.data.Sports
import com.ps.demo.lookingPlayers.LookingPlayersController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.time.LocalDateTime

@SpringBootTest
class LookingForPlayersTest {

    @Autowired
    var lookingForPlayersController : LookingPlayersController? = null

    @Test
    fun testAllStates(){

        val compound = Compound(14,null,null,null,null,null,null,
            null,null,null,null,null,null,null)
        val sport = Sports(6,null,"")
        val lookingObj = LookingPlayers(null,compound,sport,null, LocalDateTime.now(),null,null)
        val lookingResponse = lookingForPlayersController!!.createRequest(lookingObj,"jefersonNunes")

        val lookingId = lookingResponse.body!!

        Assertions.assertNotNull(lookingId)

        val navigateList = mutableListOf<LookingPlayers>()

        for (i in 0..25){
            lookingForPlayersController!!.getLookingNavigate("PessoaJ",i).body!!.map {
                navigateList.add(it!!)
            }
        }

        val checkNavigate = navigateList.filter { it.id == lookingId}

        Assertions.assertEquals(false,checkNavigate.isNullOrEmpty())

        lookingForPlayersController!!.participateRequest(lookingId,"PessoaJ")

        val pendingList = lookingForPlayersController!!.getLookingPlayersByState("PessoaJ","pending",0)

        val checkPending = pendingList.body!!.filter { it!!.id == lookingId}

        Assertions.assertEquals(false,checkPending.isNullOrEmpty())

        val acceptList = lookingForPlayersController!!.getLookingPlayersAccept("jefersonNunes",0)

        val checkAccept = acceptList.body!!.filter { it!!.id == lookingId}

        Assertions.assertEquals(false,checkAccept.isNullOrEmpty())

        lookingForPlayersController!!.confirmState(lookingId,"PessoaJ")

        val acceptedList = lookingForPlayersController!!.getLookingPlayersByState("PessoaJ","accepted",0)

        val checkAccepted = acceptedList.body!!.filter { it!!.id == lookingId}

        Assertions.assertEquals(false,checkAccepted.isNullOrEmpty())

        val participants = lookingForPlayersController!!.getLookingCreated("jefersonNunes",0)

        var participating = false

        participants.body!!.map { looking ->
            looking!!.participants!!.map { user ->
                if(user.firstName!! == "Jacinto" && user.lastName!! == "Pessoa") participating = true
            }
        }

        Assertions.assertEquals(true,participating)

        lookingForPlayersController!!.cancelState(lookingId)

        val created = lookingForPlayersController!!.getLookingCreated("jefersonNunes",0)

        Assertions.assertEquals(true,created.body!!.isEmpty())

    }

}