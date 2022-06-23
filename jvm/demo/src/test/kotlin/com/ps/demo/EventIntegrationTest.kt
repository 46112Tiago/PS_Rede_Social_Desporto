package com.ps.demo

import com.ps.data.Event
import com.ps.demo.events.EventController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus

@SpringBootTest
class EventIntegrationTest {

    @Autowired
    var eventController: EventController? = null

    @Test
    fun eventSummaryTooLong(){
        val event = Event(null,null,null,null,null,"Test",null,"Test","Summary with too many characters.Summary with too many characters.Summary with too many characters." +
                "Summary with too many characters.Summary with too many characters.Summary with too many characters." +
                "Summary with too many characters.Summary with too many characters.Summary with too many characters." +
                "Summary with too many characters.Summary with too many characters.",null,null,null)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun eventSummaryWithoutCharacters(){
        val event = Event(null,null,null,null,null,"Name",null,
            "Test","",null,null,null)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun eventSummaryWithOnlyWhitespace(){
        val event = Event(null,null,null,null,null,"",null,
            "Test","                     ",null,null,null)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun eventNameTooLong(){
        val event = Event(null,null,null,null,null,"Name with too many characters.Name with too many characters.Name with too many characters.Name with too many characters.",null,
            "Test","Summary",null,null,null)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun eventNameWithoutCharacters(){
        val event = Event(null,null,null,null,null,"",null,
            "Test","Summary",null,null,null)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun eventNameWithOnlyWhitespace(){
        val event = Event(null,null,null,null,null,"                    ",null,
            "Test","Summary",null,null,null)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun eventDescriptionWithoutCharacters(){
        val event = Event(null,null,null,null,null,"Name",null,
            "","Summary",null,null,null)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun eventDescriptionWithOnlyWhitespace(){
        val event = Event(null,null,null,null,null,"Name",null,
            "                ","Summary",null,null,null)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun checkActiveEventsWithUserEventsAndEventsUserNotParticipatingAndEventsUserCreated(){
        val activeEvents = mutableListOf<Event>()
        val userParticipatingEvent = eventController!!.getUserEventsParticipating("projeto.seminario2022",0)
        val userCreatedEvent = eventController!!.getUserEventsCreated("projeto.seminario2022",0)
        val userNotParticipatingEvent = mutableListOf<Event>()

        for (i in 0..3){
            val auxUserNotParticipatingEvent = eventController!!.getEventsNotParticipating("projeto.seminario2022",i)
            for(notParticipating in auxUserNotParticipatingEvent.body!!){
                userNotParticipatingEvent.add(notParticipating!!)
            }
        }

        for (i in 0..7){
            val auxActiveEvent = eventController!!.getActiveEvents(i)
            for(active in auxActiveEvent.body!!){
                activeEvents.add(active!!)
            }
        }

        Assertions.assertEquals(activeEvents.size,userCreatedEvent.body!!.size+userNotParticipatingEvent.size+userParticipatingEvent.body!!.size)

        val participating = userParticipatingEvent.body!!.map { it!!.id }
        val participatingResult = activeEvents.filter { event ->
            participating.contains(event.id)
        }

        Assertions.assertEquals(userParticipatingEvent.body!!.size,participatingResult.size)

        val notParticipating = userNotParticipatingEvent.map { it!!.id }
        val notParticipatingResult = activeEvents.filter { event ->
            notParticipating.contains(event.id)
        }

        Assertions.assertEquals(userNotParticipatingEvent.size,notParticipatingResult.size)

        val created = userCreatedEvent.body!!.map { it!!.id }
        val createdResult = activeEvents.filter { event ->
            created.contains(event.id)
        }

        Assertions.assertEquals(userCreatedEvent.body!!.size,createdResult.size)

    }

}