package com.ps.demo.lookingPlayers

import com.ps.data.Event
import com.ps.data.LookingPlayers
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class LookingPlayersRepoImplementation (var jdbi: Jdbi) : LookingPlayersService {

    override fun createRequest(lookingPlayers: LookingPlayers): Int? {
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

    override fun participateRequest(lookingId: Int, participantId: Int): Int {
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

    override fun updateState(state: String, lookingId: Int, participantId: Int) {
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

    override fun cancelState(lookingId: Int, userId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM LOOKINGPLAYERS " +
                    "WHERE lookingId = ? AND creatorId = ?")
                .bind(0,lookingId)
                .bind(1,userId)
                .execute()
        }    }

    override fun getLookingPlayers(lookingId: Int, state: String): List<LookingPlayers> {
        TODO("Not yet implemented")
    }

    override fun getLookingCreated(cretaorId: Int): List<LookingPlayers> {
        TODO("Not yet implemented")
    }

}