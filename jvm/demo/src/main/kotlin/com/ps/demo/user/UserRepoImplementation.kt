package com.ps.demo.user

import com.ps.data.User
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository
import java.util.*

@Repository
class UserRepoImplementation (var jdbi: Jdbi) {


    fun getUser(email : String): Int? {
        val toReturn = jdbi.withHandle<Int?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select userId from USER_PROFILE where email = ?")
                .bind(0,email)
                .mapTo<Int>().one()
        }
        return toReturn
    }

    fun isFriend(userId: Int, friendId: Int) : Optional<User>? {
        val toReturn = jdbi.withHandle<Optional<User>?,RuntimeException> { handle : Handle ->
            handle.select("Select * from FRIENDS where userId = ? AND friendId = ?")
                .bind(0,userId)
                .bind(1,friendId)
                .mapTo<User>().findOne()

        }

        return toReturn
    }

    fun getUserById(userId : Int): User? {
        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from USER_PROFILE where userId = ?")
                    .bind(0,userId)
                    .mapTo<User>().one()

        }

        return toReturn
    }

    fun deleteUser(userId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM USER_PROFILE WHERE userId = ?").bind(0, userId).execute()
        }
    }

    fun insertUser(user : User): Int {
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

    fun updateUserProfilePic(userId: Int, url: String) : User {
        return jdbi.withHandle<User,RuntimeException>{ handle:Handle ->
            handle.createUpdate("update user_profile " +
                    "SET profilepic = ? WHERE  userid = ?")
                .bind(0,url)
                .bind(1,userId).
                executeAndReturnGeneratedKeys().mapTo(User::class.java).one()
        }
    }

    fun editUserProfile(userId: Int, user: User) : Int {
        jdbi.withHandle<Int,RuntimeException> { handle: Handle ->
            handle.createUpdate("UPDATE USER_PROFILE SET city = ? , available = ? WHERE userId = ?")
                .bind(0,user.city)
                .bind(1,user.available)
                .bind(2,userId)
                .execute()
        }

        return userId
    }

    fun getFriends(userId: Int): List<User?> {
        val toReturn = jdbi.withHandle<List<User?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select friendId as userId, firstName, lastName " +
                    "from FRIENDS f " +
                    "JOIN USER_PROFILE u on f.userId = u.userId " +
                    " where u.userId = ?")
                .bind(0,userId)
                .mapTo<User>().list()
        }
        return toReturn
    }

    fun addFriend(userId: Int, friendId: Int): Int {
        jdbi.withHandle<Int,RuntimeException> { handle: Handle ->
            handle.createUpdate("INSERT INTO FRIENDS(userId,friendId) " +
                    "values(?,?")
                .bind(0,userId)
                .bind(1,friendId)
                .execute()
        }

        return friendId
    }

    fun getUsersByName(userName: String): List<User?> {
        val name = userName.split(" ")
        val toReturn = jdbi.withHandle<List<User?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select userId, firstName, lastName " +
                    "from USER_PROFILE" +
                    " where firstName = ? AND lastName = ?")
                .bind(0,name[0])
                .bind(1,name[1])
                .mapTo<User>().list()
        }
        return toReturn    }


}