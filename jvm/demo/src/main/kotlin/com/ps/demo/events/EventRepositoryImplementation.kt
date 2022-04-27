package com.ps.demo.events

import com.ps.data.Event
import org.jdbi.v3.core.Handle
import org.springframework.stereotype.Repository
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import java.sql.Timestamp
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter


@Repository
class EventRepositoryImplementation (val jdbi: Jdbi) : EventsService {

    override fun getActiveEvents(): List<Event>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select EVENT.id, startDate, plannedfinishDate, EVENT.name, limitParticipants, " +
                    "sportId, EVENT.compoundId, fieldId " +
                    "from EVENT JOIN FIELD ON EVENT.fieldId = FIELD.id  " +
                    "WHERE active = ? AND startDate < ?")
                    .bind(0,true)
                    .bind(1, timestamp)
                    .mapTo<Event>()
                    .list()
        }

        return toReturn
    }

    override fun getUserEvents(userId : Int,eventId: Int): List<Event>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select startDate, plannedfinishDate, name, limitParticipants, sports.name as sport " +
                    "from SPORTS sports JOIN EVENT event " +
                    "ON sports.id  = event.sportID " +
                    "JOIN EVENT_PARTICIPANT eventParticipant ON event.id = eventParticipant.eventId " +
                    "JOIN USER_PROFILE user on eventParticipant.participantId = user.user_id " +
                    "WHERE active = ? AND startDate < ? AND user.id = ? AND event.id")
                    .bind(0,true)
                    .bind(1, timestamp)
                    .bind(2,userId)
                    .bind(3,eventId)
                    .mapTo<Event>()
                    .list()
        }

        return toReturn
    }

    override fun getEventDescription(eventId: Int): String? {

        val toReturn = jdbi.withHandle<Event,RuntimeException> { handle : Handle ->
            handle.createQuery("Select description " +
                    "from EVENT " +
                    "WHERE id = ?")
                    .bind(0,eventId)
                    .mapTo<Event>()
                    .one()
        }

        return toReturn.description
    }


    override fun createEvent(event : Event): Int {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,limitParticipants,creatorId,active) " +
                    "values(?,?,?,?,?,?,?,?,?,?)")
                    .bind(0,event.field!!.id)
                    .bind(1,event.compound!!.id)
                    .bind(2,event.startDate)
                    .bind(3,event.plannedfinishDate)
                    .bind(4,event.name)
                    .bind(5,event.sport!!.id)
                    .bind(6,event.description)
                    .bind(7,event.limitParticipants)
                    .bind(8,event.creator!!.userId)
                    .bind(9,true)
                    .execute()
        }
        val toReturn = jdbi.withHandle<Event?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select id from EVENT " +
                    "order by id desc")
                    .mapTo<Event>().list()[0]
        }
        return toReturn.id!!
    }

    override fun participateEvent(participantId : Int, eventId : Int): Int {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "EVENT_PARTICIPANT(participantId,eventId) " +
                    "values(?,?)")
                    .bind(0,participantId)
                    .bind(1,eventId)
                    .execute()
        }
        return participantId
    }

    override fun cancelEvent(eventId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" UPDATE EVENT " +
                    "SET active = ?" +
                    "WHERE id = ?")
                    .bind(0, false)
                    .bind(1,eventId)
                    .execute()
        }
    }


}