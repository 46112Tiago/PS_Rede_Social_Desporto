package com.ps.demo.post

import com.ps.data.Feed
import com.ps.data.User
import com.ps.data.Group
import com.ps.data.Post
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable

interface PostService {

    fun getPosts() : List<Post?>

    fun getPostById(postId : Int) : Post?

    fun getPostCreator(postId : Int) : User?

    fun getUserPosts(userId: Int) : List<Post?>

    fun getPostFeed(postId: Int) : Feed?

    fun deletePost(postId : Int)

    fun insertPost(post : Post) : Int?


}
