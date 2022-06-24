package com.ps.demo

import com.ps.data.Compound
import com.ps.data.Event
import com.ps.data.Sports
import com.ps.demo.events.EventController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.postgresql.geometric.PGpoint
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import java.time.LocalDateTime

@SpringBootTest
class EventTest {

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

    @Test
    fun cancelEvent(){
        val beforeCreateEvents = mutableListOf<Event>()
        val afterCreateEvents = mutableListOf<Event>()
        val afterCancelEvent = mutableListOf<Event>()

        for (i in 0..7){
            val auxActiveEvent = eventController!!.getActiveEvents(i)
            for(active in auxActiveEvent.body!!){
                beforeCreateEvents.add(active!!)
            }
        }
        val start = LocalDateTime.of(2023,6,21,12,14)
        val finish = LocalDateTime.of(2023,6,22,12,14)
        val compound = Compound(7,null,null,null,null,null,null,null,null,null,null,null,null,false)
        val event = Event(null,null,compound,start,finish,"Name.", Sports(7,null,""),
            "Test","Summary",null,null,10)
        val eventResponse = eventController!!.createEvent(event,"projeto.seminario2022")

        for (i in 0..8){
            val auxActiveEvent = eventController!!.getActiveEvents(i)
            for(active in auxActiveEvent.body!!){
                afterCreateEvents.add(active!!)
            }
        }

        Assertions.assertEquals(beforeCreateEvents.size+1,afterCreateEvents.size)

        eventController!!.cancelEvent(eventResponse.body!!)

        for (i in 0..7){
            val auxActiveEvent = eventController!!.getActiveEvents(i)
            for(active in auxActiveEvent.body!!){
                afterCancelEvent.add(active!!)
            }
        }

        Assertions.assertEquals(beforeCreateEvents,afterCancelEvent)

    }


    @Test
    fun checkEventInformation(){

        val compound = Compound(6,null,null,null,null,null,
            PGpoint(38.541543512491515,-9.052275613906248),null,null,null,null,null,null,null)
        val event = Event(7,null,compound, LocalDateTime.of(2022,10,1,8,0),
            LocalDateTime.of(2022,10,5,17,0),"", null,
            "A Taça Federação Portuguesa de Golf 2022 terá início a dia um de outubro sendo previsto o encerramento para o dia 5 deste mês.","",null,null,null)
        val eventResponse = eventController!!.getEventDescription(7)

        Assertions.assertEquals(event,eventResponse.body!!)
    }

    @Test
    fun participateEvent(){

        val userParticipatingEventBefore = eventController!!.getUserEventsParticipating("projeto.seminario2022",0)
        val start = LocalDateTime.of(2023,6,21,12,14)
        val finish = LocalDateTime.of(2023,6,22,12,14)
        val compound = Compound(7,null,null,null,null,null,null,null,null,null,null,null,null,false)
        val event = Event(null,null,compound,start,finish,"Name.", Sports(7,null,""),
            "Test","Summary",null,null,10)
        val eventResponse = eventController!!.createEvent(event,"joanaG")


        eventController!!.participateUserEvent(eventResponse.body!!,"projeto.seminario2022")

        val userParticipatingEventAfterParticipate = eventController!!.getUserEventsParticipating("projeto.seminario2022",0)

        Assertions.assertEquals(userParticipatingEventBefore.body!!.size+1,userParticipatingEventAfterParticipate.body!!.size)

        eventController!!.cancelEvent(eventResponse.body!!)

        val userParticipatingEventAfterCancel = eventController!!.getUserEventsParticipating("projeto.seminario2022",0)

        Assertions.assertEquals(userParticipatingEventBefore.body!!,userParticipatingEventAfterCancel.body!!)



    }




}