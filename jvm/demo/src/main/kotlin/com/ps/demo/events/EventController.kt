package com.ps.demo.events

import com.ps.data.Event
import com.ps.demo.user.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import javax.websocket.server.PathParam


@RestController
@RequestMapping
@CrossOrigin("\${cors}")
class EventController (val eventService: EventsService, val userService: UserService) {

    /******************************************  GET  ******************************************/

    /*
        Get all the upcoming events that are currently active based on the @page
    */

    @GetMapping("/event")
    fun getActiveEvents(@RequestParam() page : Int) : ResponseEntity<List<Event?>?> {
        val event  = eventService.getActiveEvents(page)
        return ResponseEntity(event,HttpStatus.OK)
    }

    /*
        Get basic information of a certain event 
    */

    @GetMapping("/event/{eventId}")
    fun getEventDescription(@PathVariable("eventId") eventID : Int) : ResponseEntity<Any> {
        val description : Event = eventService.getEventInfo(eventID) ?: return ResponseEntity("Resource not found", HttpStatus.NOT_FOUND)
        return ResponseEntity(description,HttpStatus.OK)
    }

    /*
        Get a certain amount of events that the user is not participating based on the @page
    */

    @GetMapping("/user/event")
    fun getEventsNotParticipating(@RequestParam() email : String,
                                   @RequestParam() page : Int)
            : ResponseEntity<List<Event?>?> {
        val userId = userService.getUserById(email)!!.userId
        val event : List<Event?>? = eventService.getEventsNotParticipating(userId!!,page)
        return ResponseEntity(event,HttpStatus.OK)
    }

    /*
        Get a certain amount of events that the user is participating based on the @page
    */

    @GetMapping("/user/event/participating")
    fun getUserEventsParticipating(@RequestParam() email : String,
                                   @RequestParam() page : Int)
    : ResponseEntity<List<Event?>?> {
        val user = userService.getUserById(email)
        val event : List<Event?>? = eventService.getUserEventsParticipating(user!!.userId!!,page)
        return ResponseEntity(event,HttpStatus.OK)
    }

    /*
        Get a certain amount of events created by the user based on the @page
    */

    @GetMapping("/user/event/created")
    fun getUserEventsCreated(@RequestParam() email : String,
                             @RequestParam() page : Int)
            : ResponseEntity<List<Event?>?> {
        val user = userService.getUserById(email)
        val event : List<Event?>? = eventService.getUserEventsCreated(user!!.userId!!, page)
        return ResponseEntity(event,HttpStatus.OK)
    }

    /******************************************  POST  ******************************************/

    /*
        Create a new event
    */
    
    @PostMapping("/event")
    fun createEvent(@RequestBody event : Event,
                    @RequestParam() email : String) : ResponseEntity<Any> {
        val user = userService.getUserById(email)
        event.creator = user
        val eventKey : Int = eventService.createEvent(event)
        if (eventKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(eventKey,HttpStatus.OK)
    }

    /*
        Indicates that the user wants to participate in the event
    */

    @PostMapping("/user/event/{eventId}")
    fun participateUserEvent(@PathVariable eventId : Int,
                             @RequestParam() email : String) : ResponseEntity<String> {
        val userId = userService.getUserById(email)!!.userId
        val eventKey : Int = eventService.participateEvent(userId!!,eventId)
        return ResponseEntity("Participating in event $eventId",HttpStatus.OK)
    }

    /******************************************  PUT  ******************************************/

    /*
        Cancel an event
    */

    @PutMapping("/event/{eventId}")
    fun cancelEvent(@PathVariable("eventId") eventId: Int) : ResponseEntity<Any> {
        eventService.cancelEvent(eventId)
        return ResponseEntity("Event $eventId canceled",HttpStatus.OK)
    }



}