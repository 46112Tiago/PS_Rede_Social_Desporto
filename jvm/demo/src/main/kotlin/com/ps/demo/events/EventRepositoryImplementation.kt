package com.ps.demo.events

import com.ps.data.Event
import org.springframework.stereotype.Repository
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.withExtension
import org.jdbi.v3.core.kotlin.withExtensionUnchecked


@Repository
class EventRepositoryImplementation(jdbi: Jdbi) : EventsRepositoryInterface {

    val jdbi : Jdbi = jdbi

    override fun getEvent(): Event {
        val toReturn = jdbi.withExtensionUnchecked(EventsDAO::class) { dao: EventsDAO ->
            dao.getEvent()
        }
        return toReturn
    }


}