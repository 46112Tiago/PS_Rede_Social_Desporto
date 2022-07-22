package com.ps.demo.post


import com.ps.data.Post
import com.ps.data.User
import com.ps.demo.factory
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.RowMapperFactory
import org.jdbi.v3.core.result.RowView
import org.springframework.stereotype.Repository
import java.sql.Timestamp
import java.time.LocalDateTime
import java.util.*
import kotlin.collections.LinkedHashMap

@Repository
class PostRepoImplementation (var jdbi: Jdbi) {

     fun getPosts(userId: Int, page: Int): List<Post?> {
        val toReturn = jdbi.withHandle<List<Post?>,RuntimeException> { handle : Handle ->
            handle.createQuery("SELECT " +
                    "post.id as p_id," +
                    "user_profile.userid as u_userid," +
                    "post.description as p_description, " +
                    "post.postDate as p_postDate, " +
                    "post.likes as p_likes, " +
                    "user_profile.firstname as u_firstname, " +
                    "user_profile.lastname as u_lastname " +
                    "FROM FRIENDS  JOIN POST ON  Friends.friendId = Post.userId  JOIN user_profile on Friends.friendId = user_profile.userId " +
                    "Where friends.userId = ? " +
                    "UNION " +
                    "SELECT " +
                    "post.id as p_id," +
                    "user_profile.userid as u_userid," +
                    "post.description as p_description, " +
                    "post.postDate as p_postDate, " +
                    "post.likes as p_likes, " +
                    "user_profile.firstname as u_firstname, " +
                    "user_profile.lastname as u_lastname " +
                    "FROM USER_PROFILE JOIN POST ON  USER_PROFILE.userId = Post.userId " +
                    "Where USER_PROFILE.userId = ? " +
                    "ORDER BY p_postDate DESC " +
                    "LIMIT ? OFFSET 0")
                .bind(0,userId)
                .bind(1,userId)
                .bind(2,page*10 + 10)
                .registerRowMapper(factory(User::class.java, "u"))
                .registerRowMapper(factory(Post::class.java, "p"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Post?>, rowView: RowView ->
                    val post = map.computeIfAbsent(rowView.getColumn("p_id", Int::class.javaObjectType)) {
                        rowView.getRow(Post::class.java)
                    }

                    if (rowView.getColumn("u_userid", Int::class.javaObjectType) != null) {
                        post!!.user = rowView.getRow(User::class.java)
                    }
                    map
                }.values.toList()
        }

        return toReturn
    }

     fun getPostById(postId : Int): Post? {
        val toReturn = jdbi.withHandle<Post?,RuntimeException> { handle : Handle ->
            handle.createQuery("SELECT " +
                    "post.id as p_id," +
                    "user_profile.userid as u_userid," +
                    "post.description as p_description, " +
                    "post.postdate as p_postdate, " +
                    "post.likes as p_likes, " +
                    "user_profile.firstname as u_firstname, " +
                    "user_profile.lastname as u_lastname, " +
                    "user_profile.city as u_city, " +
                    "user_profile.birthdate as u_birthdate, " +
                    "user_profile.profilepic as u_profilepic, " +
                    "user_profile.email as u_email, " +
                    "user_profile.available as u_available, " +
                    "user_profile.gender as u_gender " +
                    "FROM POST INNER JOIN user_profile on post.userid = user_profile.userid AND post.id = ?")
                    .bind(0,postId)
                    .registerRowMapper(factory(User::class.java, "u"))
                    .registerRowMapper(factory(Post::class.java, "p"))
                    .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Post?>, rowView: RowView ->
                        val post = map.computeIfAbsent(rowView.getColumn("p_id", Int::class.javaObjectType)) {
                            rowView.getRow(Post::class.java)
                        }

                        if (rowView.getColumn("u_userid", Int::class.javaObjectType) != null) {
                            post!!.user = rowView.getRow(User::class.java)
                        }
                        map
                    }[postId]
        }

        return toReturn
    }

     fun getPostCreator(postId : Int): User? {
        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            handle.createQuery("SELECT " +
                    "post.id as p_id," +
                    "user_profile.userid as u_userid," +
                    "post.description as p_description, " +
                    "post.postdate as p_postdate, " +
                    "post.likes as p_likes, " +
                    "user_profile.firstname as u_firstname, " +
                    "user_profile.lastname as u_lastname, " +
                    "user_profile.city as u_city, " +
                    "user_profile.birthdate as u_birthdate, " +
                    "user_profile.profilepic as u_profilepic, " +
                    "user_profile.email as u_email, " +
                    "user_profile.available as u_available, " +
                    "user_profile.gender as u_gender " +
                    "FROM POST INNER JOIN user_profile on post.userid = user_profile.userid AND post.id = ?")
                .bind(0,postId)
                .registerRowMapper(factory(User::class.java, "u"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, User?>, rowView: RowView ->
                    val post = map.computeIfAbsent(rowView.getColumn("u_userid", Int::class.javaObjectType)) {
                        rowView.getRow(User::class.java)
                    }
                    map
                }[1]
        }

        return toReturn
    }


     fun getUserPosts(userId : Int, page: Int): List<Post?> {
        val posts = jdbi.withHandle<List<Post?>, RuntimeException> { handle: Handle ->
            handle.createQuery("Select description, postdate from post " +
                    "where userid = ? " +
                    "LIMIT 5 OFFSET ? ")
                .bind(0, userId)
                .bind(1, page*5)
                .mapTo<Post>().list()
        }
        return posts
    }


     fun deletePost(postId : Int) {

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM post WHERE id = ?")
                .bind(0, postId)
                .execute()
        }

    }

     fun insertPost(userId : Int, post : Post): Int? {

        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)

        val toReturn = jdbi.withHandle<Post,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into post(userid,description,postdate,likes)" +
                    " values(?,?,?,?)")
                .bind(0,userId)
                .bind(1,post.description)
                .bind(2,timestamp)
                .bind(3,0)
                .executeAndReturnGeneratedKeys("id").mapTo<Post>().one()
        }

        return toReturn.id
    }



}
