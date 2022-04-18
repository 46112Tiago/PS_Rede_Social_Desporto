package com.ps.demo

import com.ps.data.Event
import com.ps.demo.events.EventRepositoryImplementation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class EventController @Autowired constructor(val eventRepo: EventRepositoryImplementation) {

    @RequestMapping( "",  "GET")
    fun getEvent() : ResponseEntity<Event?> {
        val event : Event = eventRepo.getEvent()
        return ResponseEntity(event,HttpStatus.OK)
    }

}