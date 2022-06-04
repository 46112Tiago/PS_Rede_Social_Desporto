package com.ps.demo.schedule

import com.ps.data.Schedule
import org.springframework.stereotype.Service

@Service
class ScheduleService(val scheduleRepo: ScheduleRepoImplementation) {

    fun getCompoundMaterials(compoundId: Int): List<Schedule>? {
        return scheduleRepo.getCompoundSchedule(compoundId)
    }
}