package com.ps.demo.post

import com.ps.data.Post
import com.ps.data.User

interface PostService {

    fun getPosts() : List<Post?>

    fun getPostById(postId : Int) : Post?

    fun getPostCreator(postId : Int) : User?

    fun getUserPosts(userId: Int) : List<Post?>

    fun deletePost(postId : Int)

    fun insertPost(userId : Int,post : Post) : Int?


}
