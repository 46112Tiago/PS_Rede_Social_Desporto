package com.ps.demo.post


import com.ps.data.Comment
import com.ps.data.Post
import com.ps.data.User
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.RowMapperFactory
import org.jdbi.v3.core.mapper.RowMapperFactory.of
import org.jdbi.v3.core.mapper.reflect.BeanMapper
import org.jdbi.v3.core.result.LinkedHashMapRowReducer
import org.jdbi.v3.core.result.RowView
import org.springframework.stereotype.Repository
import java.sql.Timestamp
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.LinkedHashMap

@Repository
class PostRepoImplementation (var jdbi: Jdbi) : PostService {

    override fun getPosts(): List<Post?> {
        val toReturn = jdbi.withHandle<List<Post?> ,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from POST ").mapTo<Post>().list()
        }
        return toReturn
    }

    fun factory(type: Class<*>, prefix: String): RowMapperFactory {
        return RowMapperFactory.of(type, KotlinMapper(type, prefix))
    }


    override fun getPostById(postId : Int): Post? {
        val toReturn = jdbi.withHandle<Post?,RuntimeException> { handle : Handle ->
            handle.createQuery("SELECT " +
                    "post.id as p_id," +
                    "user_profile.userid as u_userid," +
                    "post.description as p_description, " +
                    "post.postdate as p_postdate, " +
                    "post.likes as p_likes, " +
                    //"post.pictures as p_pictures, " +
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
                    }[1]
        }

        return toReturn
    }

    override fun getPostCreator(postId : Int): User? {
        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            //handle.createQuery("Select * from group_participant where groupid = ?")
            handle.createQuery("Select user_profile.userId, " +
                    "firstName, " +
                    "lastName," +
                    "profilepic" +
                    " from user_profile " +
                    "inner join post pst " +
                    "on user_profile.userId = pst.userid AND pst.id = ?")//") where id = ?)")
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

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM post WHERE id = ?")
                .bind(0, postId)
                .execute()
        }

    }

    override fun insertPost(userId : Int, post : Post): Int? {

        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)

        val toReturn = jdbi.withHandle<Post,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into post(userid,description,postdate,likes)" +
                    " values(?,?,?,?)")
                .bind(0,userId)
                .bind(1,post.description)
                .bind(2,timestamp)
                .bind(3,0)
                //.bind(4,post.pictures)
                .executeAndReturnGeneratedKeys("id").mapTo<Post>().one()
        }

        return toReturn.id
    }



}
