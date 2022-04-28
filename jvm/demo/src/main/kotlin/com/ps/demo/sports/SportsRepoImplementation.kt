package com.ps.demo.sports

import com.ps.data.Sports
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class SportsRepoImplementation(val jdbi : Jdbi) : SportsService {

    override fun addSport(sports : List<Sports>) : MutableList<Sports>? {

        val sportsKeys : MutableList<Sports> = mutableList()

        for (sport in sports){

            val toReturn = jdbi.withHandle<Sports,RuntimeException> { handle: Handle ->
                handle.createUpdate("insert into " +
                        "SPORTS(name) " +
                        "values(?)")
                        .bind(0,sport.name)
                        .executeAndReturnGeneratedKeys("id").mapTo<Sports>().one()
            }

            sportsKeys.add(toReturn)

        }

        return sportsKeys
    }

    override fun addUserSport(userId: Int, sports : List<Sports>) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            for (sport in sports){
                handle.createUpdate("insert into " +
                        "USER_SPORTS(userId,sportId) " +
                        "values(?,?)")
                        .bind(0,userId)
                        .bind(1,sport.id)
            }

        }
    }

    override fun deleteUserSport(userId: Int, sportId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM USER_SPORTS WHERE userId = ? AND id = ?")
                    .bind(0, userId)
                    .bind(1,sportId)
                    .execute()
        }
    }

    override fun getUserSports(userId: Int): List<Sports>? {
        val toReturn = jdbi.withHandle<List<Sports>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select name , s.id " +
                    "from USER_SPORTS us " +
                    "join SPORTS s ON us.sportId = s.id " +
                    "WHERE userId = ? ")
                    .bind(0,userId)
                    .mapTo<Sports>()
                    .list()
        }

        return toReturn
    }

    override fun getSports(): List<Sports>? {
        val toReturn = jdbi.withHandle<List<Sports>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select name, id " +
                    "from SPORTS ")
                    .mapTo<Sports>()
                    .list()
        }

        return toReturn
    }

}