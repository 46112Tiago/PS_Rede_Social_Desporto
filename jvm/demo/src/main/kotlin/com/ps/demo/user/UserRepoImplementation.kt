package com.ps.demo.user

import com.ps.data.Image
import com.ps.data.Sports
import com.ps.data.User
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository
import java.awt.image.BufferedImage
import java.io.InputStream
import java.util.*
import javax.imageio.ImageIO


@Repository
class UserRepoImplementation (var jdbi: Jdbi) {


    fun getUser(email : String): Optional<String>? {
        val toReturn = jdbi.withHandle<Optional<String>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select firstName from USER_PROFILE where email = ?")
                .bind(0,email)
                .mapTo<String>().findFirst()
        }
        return toReturn
    }

    fun isFriend(userId: Int, friendId: Int) : Optional<User>? {
        val toReturn = jdbi.withHandle<Optional<User>?,RuntimeException> { handle : Handle ->
            handle.select("Select firstName, lastName, email from " +
                    "FRIENDS F JOIN USER_PROFILE U ON F.friendId = U.userId " +
                    "where F.userId = ? AND friendId = ?")
                .bind(0,userId)
                .bind(1,friendId)
                .mapTo<User>().findOne()

        }

        return toReturn
    }

    fun getUserById(email : String): User? {
        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            handle.createQuery(" Select email, userId, firstName, lastName, city, birthdate, available, profilepic " +
                    "from USER_PROFILE where email = ? ")
                    .bind(0, "$email@gmail.com")
                    .mapTo<User>().one()

        }

        return toReturn
    }

    fun getUserProfilePic(userId : Int): Optional<Image>? {
        val toReturn = jdbi.withHandle<Optional<Image>?,RuntimeException> { handle : Handle ->
            handle.createQuery(" Select encode(image,'hex') as image " +
                    "from Image where userId = ? ")
                .bind(0,userId)
                .mapTo<Image>().findFirst()
        }

        return toReturn
    }

    fun deleteUser(email: String) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM USER_PROFILE WHERE email = ?").bind(0, email).execute()
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

    fun insertProfilePic(hex: String,userId: Int) {
        val toReturn = jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into IMAGE(image,typeImage,userId) " +
                    "values(DECODE(?,'hex'),?,?)")
                .bind(0,hex)
                .bind(1,"profile")
                .bind(2,userId)
                .execute()
        }
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

    fun addUserSport(userId: Int, sportId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
                handle.createUpdate("insert into " +
                        "USER_SPORTS(userId,sportId) " +
                        "values(?,?)")
                    .bind(0,userId)
                    .bind(1,sportId)
                    .execute()
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

    fun getFriends(userId: Int,page:Int): List<User?> {
        val toReturn = jdbi.withHandle<List<User?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select U.email, friendId as userId, U.firstName, U.lastName  " +
                    "from friends F join user_profile U " +
                    "on U.userId = F.friendId where F.userId = ?" +
                    "INTERSECT " +
                    "Select U.email, F.userId, U.firstName, U.lastName  " +
                    "from friends F join user_profile U " +
                    "on U.userId = F.userId where friendId = ? " +
                    "LIMIT 4 OFFSET ?")
                .bind(0,userId)
                .bind(1,userId)
                .bind(2,4*page)
                .mapTo<User>().list()
        }
        return toReturn
    }

    fun getFriendsRequest(userId: Int,page:Int): List<User?> {
        val toReturn = jdbi.withHandle<List<User?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select U.email, F.userId as userId, U.firstName, U.lastName  " +
                    "from friends F join user_profile U " +
                    "on U.userId = F.userId where F.friendId = ?" +
                    "EXCEPT " +
                    "Select U.email, friendId, U.firstName, U.lastName  " +
                    "from friends F join user_profile U on " +
                    "U.userId = F.friendId where F.userId = ?" +
                    "INTERSECT " +
                    "Select U.email, F.userId, U.firstName, U.lastName  " +
                    "from friends F join user_profile U " +
                    "on U.userId = F.userId where friendId = ? " +
                    "LIMIT 4 OFFSET ? ")
                .bind(0,userId)
                .bind(1,userId)
                .bind(2,userId)
                .bind(3,4*page)
                .mapTo<User>().list()
        }
        return toReturn
    }

    fun getAllFriends(userId: Int): List<User?> {
        val toReturn = jdbi.withHandle<List<User?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select U.email, friendId as userId, U.firstName, U.lastName " +
                    "from friends F join user_profile U " +
                    "on U.userId = F.friendId where F.userId = ? " +
                    "INTERSECT " +
                    "Select U.email, F.userId, U.firstName, U.lastName " +
                    "from friends F join user_profile U " +
                    "on U.userId = F.userId where friendId = ? " +
                    "ORDER BY firstName, lastName ")
                .bind(0,userId)
                .bind(1,userId)
                .mapTo<User>().list()
        }
        return toReturn
    }

    fun addFriend(userId: Int, friendId: Int): Int {
        jdbi.withHandle<Int,RuntimeException> { handle: Handle ->
            handle.createUpdate("INSERT INTO FRIENDS(userId,friendId) " +
                    "values(?,?)")
                .bind(0,userId)
                .bind(1,friendId)
                .execute()
        }

        return friendId
    }

    fun getUsersByName(firstName: String, lastName: String,page : Int): List<User?>? {
        val toReturn = jdbi.withHandle<List<User?>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select email, firstName, lastName " +
                    "from USER_PROFILE" +
                    " where firstName LIKE ? AND lastName LIKE ? " +
                    "ORDER BY firstName, lastName " +
                    "LIMIT 4 OFFSET ? ")
                .bind(0, "$firstName%")
                .bind(1, "$lastName%")
                .bind(2,page*4)
                .mapTo<User>().list()
        }
        return toReturn
    }

    fun postProfilePic(userId: Int,path : String) : Image{

        lateinit var image : BufferedImage

        try {
            val input = javaClass.getResourceAsStream(path)
            image = ImageIO.read(input)
        } catch (e : Exception) {
            e.printStackTrace()
        }
        val toReturn = jdbi.withHandle<Image,RuntimeException> { handle: Handle ->
            handle.createUpdate("INSERT INTO IMAGE(image) " +
                    "values(bytea(?))")
                .bind(0,image)
                .executeAndReturnGeneratedKeys("id").mapTo<Image>().one()
        }
        return toReturn
    }
}