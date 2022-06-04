package com.ps.demo.schedule

import com.ps.data.Schedule
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class ScheduleRepoImplementation (var jdbi: Jdbi) {

    fun getCompoundSchedule(compoundId: Int ): List<Schedule>? {
        val toReturn = jdbi.withHandle<List<Schedule>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select S.openingHour, S.closingHour, " +
                    "S.weekday, S.optionalDescription " +
                    "from Schedule S  " +
                    "WHERE S.compoundId = ?")
                .bind(0, compoundId)
                .mapTo<Schedule>().list()
        }
        return toReturn
    }
}