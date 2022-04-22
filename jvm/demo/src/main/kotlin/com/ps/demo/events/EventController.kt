package com.ps.demo.events

import com.ps.data.Event
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@RestController
@RequestMapping("/event")
class EventController (val eventRepo : EventRepositoryImplementation) {

    @GetMapping()
    fun getEvents() : ResponseEntity<Any?> {
        val event : List<Event>? = eventRepo.getEvents()
        return ResponseEntity(event,HttpStatus.OK)
    }

}