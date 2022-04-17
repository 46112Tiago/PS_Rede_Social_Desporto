package com.ps.demo.events

import com.ps.data.Event
import org.jdbi.v3.core.Handle
import org.springframework.stereotype.Repository

import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.useHandleUnchecked
import org.jdbi.v3.core.kotlin.withExtension
import org.jdbi.v3.core.kotlin.withExtensionUnchecked
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component


@Repository
class EventRepositoryImplementation @Autowired constructor(jdbi: Jdbi) : EventsRepositoryInterface {


    val jdbi : Jdbi = jdbi

    override fun getEvent(): Event {

        val toReturn = jdbi.withExtensionUnchecked(EventsDAO::class) { dao: EventsDAO ->
            dao.getEvent()
        }
        return toReturn
    }


}