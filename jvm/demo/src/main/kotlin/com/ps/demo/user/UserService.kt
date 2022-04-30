package com.ps.demo.user

import com.ps.data.User

interface UserService {

    fun getUser() : List<User>

    fun getUserById(userId : Int) : User?

    fun deleteUser(userId : Int)

    fun insertUser(user : User) : Int

    fun updateUserProfilePic(userId: Int, url: String) : User

}