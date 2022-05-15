package com.ps.demo.user

import com.ps.data.User
import org.springframework.web.bind.annotation.RequestParam

interface UserService {

    fun getUser(email : String) : Int?

    fun getUserById(userId : Int) : User?

    fun deleteUser(userId : Int)

    fun insertUser(user : User) : Int

    fun updateUserProfilePic(userId: Int, url: String) : User

    fun editUserProfile(userId: Int, user: User) : Int

    fun getFriends(userId: Int) : List<User?>

    fun addFriend(userId: Int, friendId: Int) : Int

    fun getUsersByName(userName : String) : List<User?>

    }