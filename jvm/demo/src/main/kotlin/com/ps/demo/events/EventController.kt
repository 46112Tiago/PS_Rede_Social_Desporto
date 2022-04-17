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
@RequestMapping
@Component
class EventController @Autowired constructor(eventRepo : EventRepositoryImplementation) {

    val eventRepo : EventRepositoryImplementation = eventRepo


    @GetMapping("/events")
    fun getEvent() : ResponseEntity<Any?> {
        val event : Event = eventRepo.getEvent()
        return ResponseEntity(event,HttpStatus.OK)
    }

}