package com.ps.demo.events

import com.ps.data.Compound
import com.ps.data.Event
import com.ps.data.Post
import com.ps.data.User
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.RowMapperFactory
import org.jdbi.v3.core.result.RowView
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
                    "WHERE active = ? AND startDate > ? " +
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
                    "WHERE active = ? AND startDate > ? AND userProfile.userid = ? AND event.id " +
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

    fun getUserEventsParticipating(userId : Int): List<Event>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select E.id, startDate, " +
                    "plannedfinishDate, " +
                    "E.name, limitParticipants, " +
                    "S.name as sportName " +
                    "from SPORTS S JOIN EVENT E " +
                    "ON S.id  = E.sportID " +
                    "JOIN EVENT_PARTICIPANT EP ON E.id = EP.eventId " +
                    "JOIN USER_PROFILE U on EP.participantId = U.userid " +
                    "WHERE active = ? AND startDate > ? AND participantId = ? "
            )
                .bind(0,true)
                .bind(1, timestamp)
                .bind(2,userId)
                .mapTo<Event>()
                .list()
        }

        return toReturn
    }

    fun getUserEventsCreated(userId : Int): List<Event>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select E.id, startDate, " +
                    "plannedfinishDate, " +
                    "E.name, limitParticipants, " +
                    "S.name as sportName " +
                    "from SPORTS S JOIN EVENT E " +
                    "ON S.id  = E.sportID " +
                    "WHERE active = ? AND startDate > ? AND creatorId = ? "
            )
                .bind(0,true)
                .bind(1, timestamp)
                .bind(2,userId)
                .mapTo<Event>()
                .list()
        }

        return toReturn
    }

    fun factory(type: Class<*>, prefix: String): RowMapperFactory {
        return RowMapperFactory.of(type, KotlinMapper(type, prefix))
    }

    fun getEventDescription(eventId: Int): Event? {

        val toReturn = jdbi.withHandle<Event,RuntimeException> { handle : Handle ->
            handle.createQuery("Select E.description as e_description, E.id as e_id, " +
                    "location as c_location, C.id as c_id " +
                    "from EVENT E JOIN COMPOUND C ON compoundId = C.id " +
                    "WHERE E.id = ?")
                    .bind(0,eventId)
                .registerRowMapper(factory(Event::class.java, "e"))
                .registerRowMapper(factory(Compound::class.java, "c"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Event?>, rowView: RowView ->
                    val event = map.computeIfAbsent(rowView.getColumn("e_id", Int::class.javaObjectType)) {
                        rowView.getRow(Event::class.java)
                    }

                    if (rowView.getColumn("c_id", Int::class.javaObjectType) != null) {
                        event!!.compound = rowView.getRow(Compound::class.java)
                    }
                    map
                }[eventId]
        }

        return toReturn
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