package com.ps.demo.lookingPlayers

import com.ps.data.*
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.RowMapperFactory
import org.jdbi.v3.core.result.RowView
import org.springframework.stereotype.Repository

@Repository
class LookingPlayersRepoImplementation (var jdbi: Jdbi)  {

     fun createRequest(lookingPlayers: LookingPlayers): Int? {
        val looking : LookingPlayers = jdbi.withHandle<LookingPlayers,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime) " +
                    "values(?,?,?,?)")
                .bind(0,lookingPlayers.compound!!.id)
                .bind(1,lookingPlayers.sports!!.id)
                .bind(2,lookingPlayers.creator!!.userId)
                .bind(3,lookingPlayers.startDateTime)
                .executeAndReturnGeneratedKeys("id")
                .mapTo<LookingPlayers>().one()
        }

        return looking.id
    }

     fun participateRequest(lookingId: Int, participantId: Int): Int {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId) " +
                    "values(?,?)")
                .bind(0,lookingId)
                .bind(1,participantId)
                .execute()
        }
        return participantId
    }

     fun updateState(state: String, lookingId: Int, participantId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" UPDATE LOOKINGPLAYERS_PARTICIPANTS " +
                    "SET state = ?" +
                    "WHERE lookingId = ? AND participantId = ?")
                .bind(0, state)
                .bind(1,lookingId)
                .bind(2,participantId)
                .execute()
        }
    }

     fun cancelState(lookingId: Int, userId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM LOOKINGPLAYERS " +
                    "WHERE lookingId = ? AND creatorId = ?")
                .bind(0,lookingId)
                .bind(1,userId)
                .execute()
        }    }

     fun getLookingPlayersByState(userId: Int, state: String, page: Int): List<LookingPlayers?> {
         val toReturn = jdbi.withHandle<List<LookingPlayers?>,RuntimeException> { handle: Handle ->
             handle.createQuery(
                 "Select LP.id as lp_id, startDateTime as lp_startDateTime, creatorId as u_creatorId, " +
                         "firstName as u_firstName, lastName as u_lastName, " +
                         "sportId as s_sportId, S.name as s_name " +
                         "from LOOKINGPLAYERS LP JOIN LOOKINGPLAYERS_PARTICIPANTS LPP ON " +
                         "LP.id = LPP.lookingId " +
                         "JOIN USER_PROFILE U ON U.userId = LP.creatorId " +
                         "JOIN SPORTS S ON S.id = LP.sportId " +
                         "WHERE creatorId <> ? AND participantId = ? AND LPP.state = ? " +
                         "LIMIT 2 OFFSET ? "
             )
                 .bind(0, userId)
                 .bind(1, userId)
                 .bind(2, state)
                 .bind(3, 2 * page)
                 .registerRowMapper(factory(LookingPlayers::class.java, "lp"))
                 .registerRowMapper(factory(User::class.java, "u"))
                 .registerRowMapper(factory(Sports::class.java, "s"))
                 .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, LookingPlayers?>, rowView: RowView ->
                     val looking = map.computeIfAbsent(rowView.getColumn("lp_id", Int::class.javaObjectType)) {
                         rowView.getRow(LookingPlayers::class.java)
                     }

                     if (rowView.getColumn("u_creatorId", Int::class.javaObjectType) != null) {
                         looking!!.creator = rowView.getRow(User::class.java)
                     }

                     if (rowView.getColumn("s_sportId", Int::class.javaObjectType) != null) {
                         looking!!.sports = rowView.getRow(Sports::class.java)
                     }

                     map
                 }.values.toList()
         }
         return toReturn
    }

    fun factory(type: Class<*>, prefix: String): RowMapperFactory {
        return RowMapperFactory.of(type, KotlinMapper(type, prefix))
    }

     fun getLookingCreated(creatorId: Int, page: Int): List<LookingPlayers?> {
         val toReturn = jdbi.withHandle<List<LookingPlayers?>,RuntimeException> { handle: Handle ->
             handle.createQuery(
                 "Select LP.id as lp_id, startDateTime as lp_startDateTime, " +
                         "sportId as s_sportId, S.name as s_name " +
                         "from LOOKINGPLAYERS LP " +
                         "JOIN SPORTS S ON S.id = LP.sportId " +
                         "WHERE LP.creatorId = ? " +
                         "LIMIT 2 OFFSET ? "
             )
                 .bind(0, creatorId)
                 .bind(1, 2 * page)
                 .registerRowMapper(factory(LookingPlayers::class.java, "lp"))
                 .registerRowMapper(factory(Sports::class.java, "s"))
                 .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, LookingPlayers?>, rowView: RowView ->
                     val looking = map.computeIfAbsent(rowView.getColumn("lp_id", Int::class.javaObjectType)) {
                         rowView.getRow(LookingPlayers::class.java)
                     }

                     if (rowView.getColumn("s_sportId", Int::class.javaObjectType) != null) {
                         looking!!.sports = rowView.getRow(Sports::class.java)
                     }

                     map
                 }.values.toList()
         }
         return toReturn

     }


    fun getLookingNavigate(userId: Int, page: Int): List<LookingPlayers?> {

        val toReturn = jdbi.withHandle<List<LookingPlayers?>,RuntimeException> { handle: Handle ->
            handle.createQuery(
                "Select LP.id as lp_id, startDateTime as lp_startDateTime, creatorId as u_creatorId, " +
                        "firstName as u_firstName, lastName as u_lastName, " +
                        "sportId as s_sportId, S.name as s_name " +
                        "from LOOKINGPLAYERS LP JOIN LOOKINGPLAYERS_PARTICIPANTS LPP ON " +
                        "LP.id = LPP.lookingId " +
                        "JOIN USER_PROFILE U ON U.userId = LP.creatorId " +
                        "JOIN SPORTS S ON S.id = LP.sportId " +
                        "WHERE participantId <> ? AND LP.creatorId <> ? " +
                        "LIMIT 2 OFFSET ? "
            )
            .bind(0, userId)
            .bind(1, userId)
            .bind(2, 2 * page)
            .registerRowMapper(factory(LookingPlayers::class.java, "lp"))
            .registerRowMapper(factory(User::class.java, "u"))
            .registerRowMapper(factory(Sports::class.java, "s"))
            .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, LookingPlayers?>, rowView: RowView ->
                val looking = map.computeIfAbsent(rowView.getColumn("lp_id", Int::class.javaObjectType)) {
                    rowView.getRow(LookingPlayers::class.java)
                }

                if (rowView.getColumn("u_creatorId", Int::class.javaObjectType) != null) {
                    looking!!.creator = rowView.getRow(User::class.java)
                }

                if (rowView.getColumn("s_sportId", Int::class.javaObjectType) != null) {
                    looking!!.sports = rowView.getRow(Sports::class.java)
                }

                map
            }.values.toList()
        }
        return toReturn
    }

    fun getLookingAccept(creatorId: Int, page: Int): List<LookingPlayers> {
        val toReturn = jdbi.withHandle<List<LookingPlayers>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select startDateTime, participantId " +
                    "from LOOKINGPLAYERS LP JOIN LOOKINGPLAYERS_PARTICIPANTS LPP ON " +
                    "LP.id = LPP.lookingId" +
                    "WHERE creatorId = ? " +
                    "LIMIT 2 OFFSET ? ")
                .bind(0,creatorId)
                .mapTo<LookingPlayers>()
                .list()
        }

        return toReturn
    }

}