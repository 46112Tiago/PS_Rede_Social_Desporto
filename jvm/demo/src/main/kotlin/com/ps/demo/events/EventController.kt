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


@RestController
@RequestMapping
class EventController (val eventRepo : EventRepositoryImplementation) {

    @GetMapping("/event")
    fun getActiveEvents() : ResponseEntity<List<Event>?> {
        val event : List<Event>? = eventRepo.getActiveEvents()
        return ResponseEntity(event,HttpStatus.OK)
    }

    @GetMapping("/event/{eventId}")
    fun getEventDescription(@PathVariable("eventID") eventID : Int) : ResponseEntity<String?> {
        val description : String? = eventRepo.getEventDescription(eventID)
        return ResponseEntity(description,HttpStatus.OK)
    }

    @GetMapping("user/{userId}/event/{eventID}")
    fun getUserEvents(@PathVariable("userId") userId : Int,
                      @PathVariable("eventID") eventID : Int ) : ResponseEntity<List<Event>?> {
        val event : List<Event>? = eventRepo.getUserEvents(userId,eventID)
        return ResponseEntity(event,HttpStatus.OK)
    }

    @PostMapping("/event")
    fun createEvent(@RequestBody event : Event) : ResponseEntity<Int> {
        val eventKey : Int = eventRepo.createEvent(event)
        return ResponseEntity(eventKey,HttpStatus.OK)
    }

    @PutMapping("/event/{eventId}")
    fun cancelEvent(@PathVariable("eventId") eventId: Int) : ResponseEntity<Any?> {
        eventRepo.cancelEvent(eventId)
        return ResponseEntity(HttpStatus.OK)
    }



}