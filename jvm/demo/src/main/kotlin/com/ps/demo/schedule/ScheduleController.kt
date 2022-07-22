package com.ps.demo.schedule

import com.ps.data.Material
import com.ps.data.Schedule
import com.ps.demo.material.MaterialService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/schedule")
@CrossOrigin("\${cors}")
class ScheduleController(val scheduleService: ScheduleService) {

    /******************************************  GET  ******************************************/

    /* 
        Get the schedule for the specified compound
    */

    @GetMapping("/compound/{compoundId}")
    fun getCompoundSchedule(@PathVariable("compoundId") compoundId: Int): ResponseEntity<List<Schedule>?> {
        val schedules = scheduleService.getCompoundSchedule(compoundId)
        return ResponseEntity(schedules, HttpStatus.OK)
    }
}