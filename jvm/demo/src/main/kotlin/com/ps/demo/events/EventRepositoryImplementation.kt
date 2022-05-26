package com.ps.demo.events

import com.ps.data.Event
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository
import java.sql.Timestamp
import java.time.LocalDateTime


@Repository
class EventRepositoryImplementation (val jdbi: Jdbi){

    fun getActiveEvents(page:Int): List<Event>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select EVENT.id, startDate, plannedfinishDate, EVENT.name, limitParticipants, " +
                    "sportId, EVENT.compoundId, fieldId " +
                    "from EVENT JOIN FIELD ON EVENT.fieldId = FIELD.id  " +
                    "WHERE active = ? AND startDate < ? " +
                    "LIMIT 2 OFFSET ? "
            )
                    .bind(0,true)
                    .bind(1, timestamp)
                    .bind(2,page*2)
                    .mapTo<Event>()
                    .list()
        }

        return toReturn
    }

    fun getUserEvents(userId : Int,eventId: Int): List<Event>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select startDate, " +
                    "plannedfinishDate, " +
                    "event.name, limitParticipants, " +
                    "sports.name as sport " +
                    "from SPORTS sports JOIN EVENT event " +
                    "ON sports.id  = event.sportID " +
                    "JOIN EVENT_PARTICIPANT eventParticipant ON event.id = eventParticipant.eventId " +
                    "JOIN USER_PROFILE userProfile on eventParticipant.participantId = userProfile.userid " +
                    "WHERE active = ? AND startDate < ? AND userProfile.userid = ? AND event.id " +
                    "LIMIT 2 OFFSET ? "

            )
                    .bind(0,true)
                    .bind(1, timestamp)
                    .bind(2,userId)
                    .bind(3,eventId)
                    .bind(4,1)
                    .mapTo<Event>()
                    .list()
        }

        return toReturn
    }

    fun getEventDescription(eventId: Int): String? {

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


    fun createEvent(event : Event): Int {
        val toReturn : Event = jdbi.withHandle<Event,RuntimeException> { handle: Handle ->
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
                    .executeAndReturnGeneratedKeys("id")
                    .mapTo<Event>().one()
        }
        return toReturn.id!!
    }

    fun participateEvent(participantId : Int, eventId : Int): Int {
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

    fun cancelEvent(eventId : Int) {
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