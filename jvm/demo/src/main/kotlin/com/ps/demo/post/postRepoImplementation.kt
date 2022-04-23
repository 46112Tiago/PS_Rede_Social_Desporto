package com.ps.demo.post


import com.ps.data.Feed
import com.ps.data.Group
import com.ps.data.Post
import com.ps.data.User

import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class PostRepoImplementation @Autowired constructor(var jdbi: Jdbi) : PostService {
    override fun getPosts(): List<Post?> {
        val toReturn = jdbi.withHandle<List<Post?> ,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from POST ").mapTo<Post>().list()
        }
        return toReturn
    }


    override fun getPostById(postId : Int): Post? {
        val toReturn = jdbi.withHandle<Post?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from POST where post_id = ?")
                    .bind(0,postId)
                    .mapTo<Post>()
                    .one()
        }

        return toReturn
    }

    override fun getPostCreator(postId : Int): User? {
        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            //handle.createQuery("Select * from group_participant where groupid = ?")
            handle.createQuery("Select * from user_profile inner join post pst on user_profile.user_id = pst.userid AND pst.post_id = ?")//") where id = ?)")
                .bind(0,postId)
                .mapTo<User>()
                .one()
        }
        return toReturn
    }


    override fun getUserPosts(userId : Int): List<Post?> {
        val posts = jdbi.withHandle<List<Post?>, RuntimeException> { handle: Handle ->
            handle.createQuery("(Select * from post where userid = ?)")
                .bind(0, userId)
                .mapTo<Post>().list()
        }
        return posts
    }


    override fun deletePost(postId : Int) {

        jdbi.useHandle<RuntimeException> {
            handle: Handle ->
                handle.createUpdate("DELETE FROM feed_post WHERE postid = ?")
                    .bind(0,postId)
                    .execute()
        }

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM post WHERE post_id = ?")
                .bind(0, postId)
                .execute()
        }

    }

    override fun insertPost(post : Post): Int? {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into post(userid,description,postdate,likes,pictures)" +
                    " values(?,?,?,?,?)")
                .bind(0,post.user!!.user_id)
                .bind(1,post.description)
                .bind(2,post.date)
                .bind(3,post.likes)
                .bind(4,post.pictures)
                .execute()
        }

        val toReturn = jdbi.withHandle<Post?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from Post order by post_id desc").mapTo<Post>().list().first()

        }
        return toReturn.id
    }



}
