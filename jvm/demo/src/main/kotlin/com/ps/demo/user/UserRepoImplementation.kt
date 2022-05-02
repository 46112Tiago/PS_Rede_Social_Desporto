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
            handle.createQuery("Select * from USER_PROFILE ").mapTo<User>().list()

        }

        return toReturn
    }

    override fun getUserByEmail(userEmail : String): Int? {
        val toReturn = jdbi.withHandle<Int?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select userId from USER_PROFILE where email = ?")
                .bind(0,userEmail)
                .mapTo<Int>().one()
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

    override fun updateUserProfilePic(userId: Int, url: String) : User {
        return jdbi.withHandle<User,RuntimeException>{ handle:Handle ->
            handle.createUpdate("update user_profile " +
                    "SET profilepic = ? WHERE  userid = ?").bind(0,url).bind(1,userId).executeAndReturnGeneratedKeys().mapTo(User::class.java).one()
        }
    }

}