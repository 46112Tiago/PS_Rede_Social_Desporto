package com.ps.demo.post

import com.ps.data.Post
import com.ps.data.User
import org.springframework.stereotype.Service

@Service
class PostService(val postRepo : PostRepoImplementation) {

    fun getPosts(userId: Int, page: Int) : List<Post?>? {
        if (page < 0) return null
        return postRepo.getPosts(userId,page)
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
        val postTxt =  post.description.replace("\\s".toRegex(), "")
        if (post.description.isEmpty() || post.description.length > 100 || postTxt.isEmpty())
            return -1
        return postRepo.insertPost(userId, post)
    }


}
