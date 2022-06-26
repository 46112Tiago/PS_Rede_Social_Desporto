package com.ps.demo.events

import com.ps.data.*
import com.ps.demo.factory
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

    fun getActiveEvents(page:Int): List<Event?>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event?>,RuntimeException> { handle : Handle ->

        handle.createQuery("Select E.id as e_id, E.startDate as e_startDate, " +
                "E.plannedfinishDate as e_plannedfinishDate, " +
                "E.name as e_name, E.limitParticipants as e_limitParticipants, " +
                "E.description as e_description, E.summary as e_summary, " +
                "sportId as s_sportId, S.name as s_name, " +
                "compoundId as c_compoundId, location as c_location, " +
                "C.name as c_name " +
                "from SPORTS S JOIN EVENT E " +
                "ON S.id  = E.sportID " +
                "JOIN COMPOUND C ON C.id = E.compoundId " +
                "WHERE active = ? AND startDate > ?  " +
                "ORDER BY E.startDate " +
                "LIMIT 2 OFFSET ?"
        )
            .bind(0,true)
            .bind(1, timestamp)
            .bind(2,page*2)
            .registerRowMapper(factory(Event::class.java, "e"))
            .registerRowMapper(factory(Sports::class.java, "s"))
            .registerRowMapper(factory(Compound::class.java, "c"))
            .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Event?>, rowView: RowView ->
                val event = map.computeIfAbsent(rowView.getColumn("e_id", Int::class.javaObjectType)) {
                    rowView.getRow(Event::class.java)
                }

                if (rowView.getColumn("s_sportId", Int::class.javaObjectType) != null) {
                    event!!.sport = rowView.getRow(Sports::class.java)
                }

                if (rowView.getColumn("c_compoundId", Int::class.javaObjectType) != null) {
                    event!!.compound = rowView.getRow(Compound::class.java)
                }

                map
            }.values.toList()
        }
        return toReturn
    }

    fun getUserEventsParticipating(userId : Int, page: Int): List<Event?>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select E.id as e_id, E.startDate as e_startDate, " +
                    "E.plannedfinishDate as e_plannedfinishDate, " +
                    "E.name as e_name, E.limitParticipants as e_limitParticipants, " +
                    "E.description as e_description,E.summary as e_summary,  " +
                    "sportId as s_sportId, S.name as s_name, " +
                    "compoundId as c_compoundId, location as c_location, " +
                    "C.name as c_name " +
                    "from SPORTS S JOIN EVENT E " +
                    "ON S.id  = E.sportID " +
                    "JOIN COMPOUND C ON C.id = E.compoundId " +
                    "JOIN EVENT_PARTICIPANT EP ON E.id = EP.eventId " +
                    "JOIN USER_PROFILE U on EP.participantId = U.userid " +
                    "WHERE active = ? AND startDate > ? AND participantId = ? AND creatorId <> ?" +
                    "ORDER BY E.startDate " +
                    "LIMIT 10 OFFSET ?"
            )
                .bind(0,true)
                .bind(1, timestamp)
                .bind(2,userId)
                .bind(3,userId)
                .bind(4,page*10)
                .registerRowMapper(factory(Event::class.java, "e"))
                .registerRowMapper(factory(Sports::class.java, "s"))
                .registerRowMapper(factory(Compound::class.java, "c"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Event?>, rowView: RowView ->
                    val event = map.computeIfAbsent(rowView.getColumn("e_id", Int::class.javaObjectType)) {
                        rowView.getRow(Event::class.java)
                    }

                    if (rowView.getColumn("s_sportId", Int::class.javaObjectType) != null) {
                        event!!.sport = rowView.getRow(Sports::class.java)
                    }

                    if (rowView.getColumn("c_compoundId", Int::class.javaObjectType) != null) {
                        event!!.compound = rowView.getRow(Compound::class.java)
                    }

                    map
                }.values.toList()
        }

        return toReturn
    }

    fun getUserEventsCreated(userId : Int, page: Int): List<Event?>? {

        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select E.id as e_id, E.startDate as e_startDate, " +
                    "E.plannedfinishDate as e_plannedfinishDate, " +
                    "E.name as e_name, E.limitParticipants as e_limitParticipants, E.description as e_description, " +
                    "sportId as s_sportId, S.name as s_name, " +
                    "compoundId as c_compoundId, location as c_location, C.name as c_name " +
                    "from SPORTS S JOIN EVENT E " +
                    "ON S.id  = E.sportID " +
                    "JOIN COMPOUND C ON C.id = E.compoundId " +
                    "WHERE active = ? AND startDate > ? AND creatorId = ? " +
                    "ORDER BY E.startDate " +
                    "LIMIT 9 OFFSET ?"
            )
                .bind(0,true)
                .bind(1, timestamp)
                .bind(2,userId)
                .bind(3,page*9)
                .registerRowMapper(factory(Event::class.java, "e"))
                .registerRowMapper(factory(Sports::class.java, "s"))
                .registerRowMapper(factory(Compound::class.java, "c"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Event?>, rowView: RowView ->
                    val event = map.computeIfAbsent(rowView.getColumn("e_id", Int::class.javaObjectType)) {
                        rowView.getRow(Event::class.java)
                    }

                    if (rowView.getColumn("s_sportId", Int::class.javaObjectType) != null) {
                        event!!.sport = rowView.getRow(Sports::class.java)
                    }

                    if (rowView.getColumn("c_compoundId", Int::class.javaObjectType) != null) {
                        event!!.compound = rowView.getRow(Compound::class.java)
                    }

                    map
                }.values.toList()
        }

        return toReturn
    }

    fun getEventInfo(eventId: Int): Event? {

        val toReturn = jdbi.withHandle<Event,RuntimeException> { handle : Handle ->
            handle.createQuery("Select E.description as e_description, E.id as e_id, " +
                    "E.startDate as e_startDate, E.plannedfinishDate as e_plannedfinishDate, " +
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
                    "EVENT(compoundId,startDate,plannedfinishDate,name,sportId,description,limitParticipants,creatorId,active,summary) " +
                    "values(?,?,?,?,?,?,?,?,?,?)")
                    .bind(0,event.compound!!.id)
                    .bind(1,event.startDate)
                    .bind(2,event.plannedfinishDate)
                    .bind(3,event.name)
                    .bind(4,event.sport!!.id)
                    .bind(5,event.description)
                    .bind(6,event.limitParticipants)
                    .bind(7,event.creator!!.userId)
                    .bind(8,true)
                    .bind(9,event.summary)
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


    fun getEventsNotParticipating(page:Int,userId: Int): List<Event?>? {


        val now = LocalDateTime.now()
        val timestamp: Timestamp = Timestamp.valueOf(now)

        val toReturn = jdbi.withHandle<List<Event?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select Distinct E.id as e_id, E.startDate as e_startDate, " +
                    "E.plannedfinishDate as e_plannedfinishDate, " +
                    "E.name as e_name, E.limitParticipants as e_limitParticipants, " +
                    "E.description as e_description, E.summary as e_summary, " +
                    "sportId as s_sportId, S.name as s_name, " +
                    "compoundId as c_compoundId,  " +
                    "C.name as c_name " +
                    "from SPORTS S JOIN EVENT E " +
                    "ON S.id  = E.sportID " +
                    "JOIN COMPOUND C ON C.id = E.compoundId " +
                    "WHERE active = ? AND E.creatorId <> ?" +

                    "EXCEPT " +

                    "Select Distinct E.id as e_id, E.startDate as e_startDate, " +
                    "E.plannedfinishDate as e_plannedfinishDate, " +
                    "E.name as e_name, E.limitParticipants as e_limitParticipants, " +
                    "E.description as e_description, E.summary as e_summary," +
                    "sportId as s_sportId, S.name as s_name, " +
                    "compoundId as c_compoundId,  " +
                    "C.name as c_name " +
                    "from SPORTS S JOIN EVENT E " +
                    "ON S.id  = E.sportID " +
                    "JOIN COMPOUND C ON C.id = E.compoundId " +
                    "JOIN EVENT_PARTICIPANT EP ON E.id = EP.eventId " +
                    "WHERE active = ? AND participantId = ? " +
                    "LIMIT 2 OFFSET ?"
            )
                .bind(0,true)
                .bind(1,userId)
                .bind(2,true)
                .bind(3,userId)
                .bind(4,page*2)
                .registerRowMapper(factory(Event::class.java, "e"))
                .registerRowMapper(factory(Sports::class.java, "s"))
                .registerRowMapper(factory(Compound::class.java, "c"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Event?>, rowView: RowView ->
                    val event = map.computeIfAbsent(rowView.getColumn("e_id", Int::class.javaObjectType)) {
                        rowView.getRow(Event::class.java)
                    }

                    if (rowView.getColumn("s_sportId", Int::class.javaObjectType) != null) {
                        event!!.sport = rowView.getRow(Sports::class.java)
                    }

                    if (rowView.getColumn("c_compoundId", Int::class.javaObjectType) != null) {
                        event!!.compound = rowView.getRow(Compound::class.java)
                    }

                    map
                }.values.toList()
        }
        return toReturn
    }


}