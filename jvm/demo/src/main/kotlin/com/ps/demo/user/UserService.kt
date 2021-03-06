package com.ps.demo.user

import com.ps.data.Image
import com.ps.data.User
import com.ps.demo.removeWhitespaces
import org.springframework.stereotype.Service
import java.io.IOException
import java.nio.file.Files
import java.nio.file.Paths
import java.util.*

@Service
class UserService(val userRepo : UserRepoImplementation) {

    fun getUser(email : String) : Optional<String>? {
        return userRepo.getUser(email)
    }

    fun getAllFriends(userId: Int) : List<User?> {
        return userRepo.getAllFriends(userId)
    }

    fun getUserInfo(email : String) : User? {
        val user = userRepo.getUserById(email)
        if (user != null){
            //Get the profile pic
            val profilePic = userRepo.getUserProfilePic(user.userId!!)
            if (profilePic != null && profilePic.isPresent)
                user.profilepic = profilePic.get().image
        }
        return user
    }

    fun getUserById(email : String) : User? {
        return userRepo.getUserById(email)
    }

    fun deleteUser(email: String) {
        userRepo.deleteUser(email)
    }

    fun insertUser(user : User) : Int {
        
        //Check if the values have been introduced correctly        
        if (user.firstName == null || user.lastName == null || user.city == null ||
            user.birthdate == null || user.email == null || user.gender == null)
                return -1

        val fName = removeWhitespaces(user.firstName)
        val lName = removeWhitespaces(user.lastName)
        val city = removeWhitespaces(user.city)
        val emailTxt = removeWhitespaces(user.email)
        val genderTxt = removeWhitespaces(user.gender)

        if (fName.isEmpty() || user.firstName.isEmpty() ||
            lName.isEmpty() || user.lastName.isEmpty() ||
            city.isEmpty()  || user.city.isEmpty() ||
            emailTxt.isEmpty() || user.email.isEmpty() ||
            genderTxt.isEmpty()  || user.gender.isEmpty())
                return -1

        val userId = userRepo.insertUser(user)


        if (user.profilepic != null) {
            userRepo.insertProfilePic(user.profilepic!!,userId)
        }
        return userId
    }

    fun updateUserProfilePic(userId: Int, url: String) : User {
        return userRepo.updateUserProfilePic(userId,url)
    }

    fun editUserProfile(userId: Int, user: User) : Int {
        if (user.sports!!.isNotEmpty()) {
            //Iterates for the sports and insert them as favourites of the user
            for (sport in user.sports!!)
                userRepo.addUserSport(userId,sport.id!!)
        }
        return userRepo.editUserProfile(userId,user)
    }

    fun getFriends(userId: Int,page:Int) : List<User?> {
        return userRepo.getFriends(userId,page)
    }

    fun getFriendsRequest(userId: Int,page:Int) : List<User?> {
        return userRepo.getFriendsRequest(userId,page)
    }

    fun addFriend(userId: Int, friendId: Int) : Int {
        //Check if the users are already friends before add as a new friend
        if(userRepo.isFriend(userId,friendId)!!.isEmpty) {
            return userRepo.addFriend(userId,friendId)
        }
        return -1
    }

    fun getUsersByName(userName : String,page : Int) : List<User?>? {
        //Check if the values have been introduced correctly
        val name = removeWhitespaces(userName)
        if (name.isEmpty()) return listOf()
        val splitName = userName.split(" ")
        val firstName = splitName[0]
        var lastName = ""
        //Check if there is a lastname in the string
        if (splitName.size > 1) lastName =  splitName[1]
        return userRepo.getUsersByName(firstName,lastName,page)
    }

    //Check if the users are already friends
    fun isFriend(userId: Int, friendId: Int) : Optional<User>? {
        return userRepo.isFriend(userId,friendId)
    }

}