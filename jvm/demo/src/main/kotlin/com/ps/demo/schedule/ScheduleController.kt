package com.ps.demo.schedule

import com.ps.data.Material
import com.ps.data.Schedule
import com.ps.demo.material.MaterialService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/schedule")
@CrossOrigin("http://localhost:3000")
class ScheduleController(val scheduleService: ScheduleService) {

    @GetMapping("/compound/{compoundId}")
    fun getCompoundMaterials(@PathVariable("compoundId") compoundId: Int): ResponseEntity<List<Schedule>?> {
        val schedules = scheduleService.getCompoundMaterials(compoundId)
        return ResponseEntity(schedules, HttpStatus.OK)
    }
}