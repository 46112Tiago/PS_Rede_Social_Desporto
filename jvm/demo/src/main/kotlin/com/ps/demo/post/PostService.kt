package com.ps.demo.post

import com.ps.data.Post
import com.ps.data.User
import org.springframework.stereotype.Service

@Service
class PostService(val postRepo : PostRepoImplementation) {

    fun getPosts(userId: Int) : List<Post?> {
        return postRepo.getPosts(userId)
    }

    fun getPostById(postId : Int) : Post? {
        return postRepo.getPostById(postId)
    }

    fun getPostCreator(postId : Int) : User? {
        return postRepo.getPostCreator(postId)
    }

    fun getUserPosts(userId: Int) : List<Post?> {
        return postRepo.getUserPosts(userId)
    }

    fun deletePost(postId : Int) {
        return postRepo.deletePost(postId)
    }

    fun insertPost(userId : Int,post : Post) : Int? {
        return postRepo.insertPost(userId, post)
    }


}
