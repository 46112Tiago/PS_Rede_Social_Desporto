package com.ps.demo.user

import com.ps.data.Image
import com.ps.data.User
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(val userRepo : UserRepoImplementation) {

    fun getUser(email : String) : Int? {
        return userRepo.getUser(email)
    }

    fun getUserInfo(userId : Int) : User? {
        return userRepo.getUserById(userId)
    }

    fun getUserById(userId : Int) : User? {
        return userRepo.getUserById(userId)
    }

    fun deleteUser(userId : Int) {
        userRepo.deleteUser(userId)
    }

    fun insertUser(user : User) : Int {
        return userRepo.insertUser(user)
    }

    fun updateUserProfilePic(userId: Int, url: String) : User {
        return userRepo.updateUserProfilePic(userId,url)
    }

    fun editUserProfile(userId: Int, user: User) : Int {
        return userRepo.editUserProfile(userId,user)
    }

    fun getFriends(userId: Int) : List<User?> {
        return userRepo.getFriends(userId)
    }

    fun addFriend(userId: Int, friendId: Int) : Int {
        if(userRepo.isFriend(userId,friendId)!!.isPresent) {
            return userRepo.addFriend(userId,friendId)
        }
        return -1
    }

    fun getUsersByName(userName : String) : List<User?> {
        return userRepo.getUsersByName(userName)
    }

    fun isFriend(userId: Int, friendId: Int) : User? {
        return userRepo.isFriend(userId,friendId)!!.get()
    }

    fun postProfilePic(userId: Int, imagePath :  String) : Image {
        return userRepo.postProfilePic(userId,imagePath);
    }

}