package com.ps.demo.events

import com.ps.data.Event
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import javax.websocket.server.PathParam


@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class EventController (val eventService: EventsService) {

    @GetMapping("/event")
    fun getActiveEvents(@RequestParam(required = false) page : Int) : ResponseEntity<List<Event?>?> {
        val event  = eventService.getActiveEvents(page)
        return ResponseEntity(event,HttpStatus.OK)
    }

    @GetMapping("/event/{eventId}")
    fun getEventDescription(@PathVariable("eventId") eventID : Int) : ResponseEntity<Event?> {
        val description : Event? = eventService.getEventDescription(eventID)
        return ResponseEntity(description,HttpStatus.OK)
    }

    @GetMapping("/user/{userId}/event")
    fun getEventsNotParticipating(@PathVariable("userId") userId : Int,
                                   @RequestParam(required = false) page : Int)
            : ResponseEntity<List<Event?>?> {
        val event : List<Event?>? = eventService.getEventsNotParticipating(userId,page)
        return ResponseEntity(event,HttpStatus.OK)
    }

    @GetMapping("/user/{userId}/event/participating")
    fun getUserEventsParticipating(@PathVariable("userId") userId : Int,
                                   @RequestParam(required = false) page : Int)
    : ResponseEntity<List<Event?>?> {
        val event : List<Event?>? = eventService.getUserEventsParticipating(userId,page)
        return ResponseEntity(event,HttpStatus.OK)
    }

    @GetMapping("/user/{userId}/event/created")
    fun getUserEventsCreated(@PathVariable("userId") userId : Int,
                             @RequestParam(required = false) page : Int)
            : ResponseEntity<List<Event?>?> {
        val event : List<Event?>? = eventService.getUserEventsCreated(userId, page)
        return ResponseEntity(event,HttpStatus.OK)
    }

    @GetMapping("/user/{userId}/event/{eventId}")
    fun getUserEvents(@PathVariable("userId") userId : Int,
                      @PathVariable("eventId") eventID : Int ) : ResponseEntity<List<Event>?> {
        val event : List<Event>? = eventService.getUserEvents(userId,eventID)
        return ResponseEntity(event,HttpStatus.OK)
    }

    @PostMapping("/event")
    fun createEvent(@RequestBody event : Event) : ResponseEntity<Int> {
        val eventKey : Int = eventService.createEvent(event)
        return ResponseEntity(eventKey,HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/event/{eventId}")
    fun participateUserEvent(@PathVariable eventId : Int, @PathVariable userId: Int) : ResponseEntity<Int> {
        val eventKey : Int = eventService.participateEvent(userId,eventId)
        return ResponseEntity(eventKey,HttpStatus.OK)
    }

    @PutMapping("/event/{eventId}")
    fun cancelEvent(@PathVariable("eventId") eventId: Int) : ResponseEntity<Any?> {
        eventService.cancelEvent(eventId)
        return ResponseEntity(HttpStatus.OK)
    }



}