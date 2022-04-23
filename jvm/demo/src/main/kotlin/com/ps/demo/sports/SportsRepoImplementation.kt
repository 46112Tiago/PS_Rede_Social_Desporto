package com.ps.demo.sports

import com.ps.data.Sports
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class SportsRepoImplementation(val jdbi : Jdbi) : SportsService {

    override fun addUserSport(userId: Int, sports : Sports): Int? {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "USER_SPORTS(userId,name) " +
                    "values(?,?)")
                    .bind(0,userId)
                    .bind(1,sports.name)
                    .execute()
        }
        val toReturn = jdbi.withHandle<Sports?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select id from USER_SPORTS where userId = ? order by id desc")
                    .bind(0,userId)
                    .mapTo<Sports>().one()

        }
        return toReturn.id
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
            handle.createQuery("Select name " +
                    "from USER_SPORTS " +
                    "WHERE userId = ? ")
                    .bind(0,userId)
                    .mapTo<Sports>()
                    .list()
        }

        return toReturn
    }

}