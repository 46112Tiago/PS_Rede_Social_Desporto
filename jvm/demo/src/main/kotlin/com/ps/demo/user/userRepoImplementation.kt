package com.ps.demo.user

import com.ps.data.User
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class UserRepoImplementation @Autowired constructor(var jdbi: Jdbi) : UserService {
    override fun getUser(): List<User> {
        val toReturn = jdbi.withHandle<List<User>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from USER_PROFILE ").mapTo<User>().list()

        }

        return toReturn
    }


    override fun getUserById(userId : Int): User? {
        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from USER_PROFILE where user_id = 1").mapTo<User>().one()

        }

        return toReturn
    }

    override fun deleteUser(userId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM USER_PROFILE WHERE user_id = ?").bind(0, userId).execute()
        }
    }

    override fun insertUser(user : User): Int {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into USER_PROFILE(firstname,lastname,city,birthday,email,available,gender) " +
                    "values(?,?,?,?,?,?)").bind(0,user.firstname)
                                        .bind(1,user.lastname)
                                        .bind(2,user.city)
                                        .bind(3,user.birthday)
                                        .bind(4,user.email)
                                        .bind(5,user.available)
                                        .bind(6,user.gender)
                                        .execute()
        }

        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from USER_PROFILE order by user_id desc").mapTo<User>().list().first()

        }
        return toReturn.user_id!!
    }

}