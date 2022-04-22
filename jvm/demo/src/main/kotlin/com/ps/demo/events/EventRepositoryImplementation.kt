package com.ps.demo.events

import com.ps.data.Event
import org.jdbi.v3.core.Handle
import org.springframework.stereotype.Repository
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo


@Repository
class EventRepositoryImplementation (val jdbi: Jdbi) : EventsService {

    override fun getEvents(): List<Event>? {

        val toReturn = jdbi.withHandle<List<Event>?,RuntimeException> {
            handle : Handle -> handle.createQuery("Select * from Event")
                .mapTo<Event>().list()
        }
        return toReturn
    }

    override fun createEvent(): Int {
        val toReturn = jdbi.withHandle<Int,RuntimeException> {
            handle : Handle ->

            handle.createUpdate("").execute()

            handle.createQuery("Select id from Event order by Desc")
                .mapTo<Int>().one()
        }
        return toReturn
    }


}