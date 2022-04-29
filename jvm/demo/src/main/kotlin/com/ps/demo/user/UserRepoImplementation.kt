package com.ps.demo.user

import com.ps.data.User
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class UserRepoImplementation (var jdbi: Jdbi) : UserService {

    override fun getUser(): List<User> {
        val toReturn = jdbi.withHandle<List<User>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select firstName, lastName, birthdate from USER_PROFILE ").mapTo<User>().list()

        }

        return toReturn
    }


    override fun getUserById(userId : Int): User? {
        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from USER_PROFILE where userId = ?")
                    .bind(0,userId)
                    .mapTo<User>().one()

        }

        return toReturn
    }

    override fun deleteUser(userId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM USER_PROFILE WHERE userId = ?").bind(0, userId).execute()
        }
    }

    override fun insertUser(user : User): Int {
        val toReturn = jdbi.withHandle<User,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender) " +
                    "values(?,?,?,?,?,?,?)").bind(0,user.firstName)
                                        .bind(1,user.lastName)
                                        .bind(2,user.city)
                                        .bind(3,user.birthdate)
                                        .bind(4,user.email)
                                        .bind(5,user.available)
                                        .bind(6,user.gender)
                                        .executeAndReturnGeneratedKeys("userid")
                                        .mapTo<User>().one()
        }

        return toReturn.userId!!
    }

}