package com.ps.demo.feed


import com.ps.data.Feed
import com.ps.data.Post
import com.ps.data.User
import com.ps.demo.feed.FeedService
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class FeedRepoImplementation @Autowired constructor(var jdbi: Jdbi) : FeedService {

    override fun getFeeds(): List<Feed?> {
        val toReturn = jdbi.withHandle<List<Feed?> ,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from feed ")
                .mapTo<Feed>()
                .list()

        }

        return toReturn
    }


    override fun getFeedById(feedId : Int): Feed? {
        val toReturn = jdbi.withHandle<Feed?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from feed where feed_id = ?")
                    .bind(0,feedId)
                    .mapTo<Feed>()
                    .one()
        }

        return toReturn
    }

    override fun getFeedUser(feedId : Int): User? {
        val toReturn = jdbi.withHandle<User?,RuntimeException> { handle : Handle ->
            handle.createQuery("(Select userid = ? from feed left join user_profile up on userid = up.user_id)")
                .bind(0,feedId)
                .mapTo<User>()
                .one()
        }

        return toReturn
    }

    override fun getFeedPosts(feedId : Int): List<Post?> {
        val toReturn = jdbi.withHandle<List<Post?>,RuntimeException> { handle : Handle ->
            //handle.createQuery("Select * from feed_participant where feedid = ?")
            handle.createQuery("SELECT * FROM POST LEFT JOIN FEED_POST ON feedid = ?") //"(Select userid = ? from feed left join user_profile up on userid = up.id)")
                .bind(0,feedId)
                .mapTo<Post>()
                .list()
        }

        return toReturn
    }

    override fun getFeedByUserId(userId : Int): Feed? {
        val toReturn = jdbi.withHandle<Feed?,RuntimeException> { handle : Handle ->
            //handle.createQuery("Select * from feed_participant where feedid = ?")
            handle.createQuery("SELECT * FROM POST LEFT JOIN FEED_POST ON userid = ?") //"(Select userid = ? from feed left join user_profile up on userid = up.id)")
                .bind(0,userId)
                .mapTo<Feed>()
                .one()
        }

        return toReturn
    }



    override fun insertFeed(feed : Feed): Int? {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into FEED(userid) values(?)")
                .bind(0,feed.user?.user_id)
                .execute()
        }

        val toReturn = jdbi.withHandle<Feed?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from USER_GROUP order by id desc").mapTo<Feed>().list().first()

        }
        return toReturn.feed_id
    }

    override fun insertFeedPost(feed : Feed, post: Post): Int? {
        val postid = jdbi.useHandle<RuntimeException>{
            handle : Handle ->
            handle.createUpdate("INSERT INTO " +
                    "POST(post_id, userid, description, postdate, likes, pictures) " +
                    "VALUES(?,?,?,?,?,?)")
                .execute()
        }

        val toReturn = jdbi.withHandle<Int?,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into FEED_POST(postid, feedid)  values(?,?)")
                .bind(0,postid)
                .bind(1,feed.user?.user_id)
                .execute()
        }

        return toReturn
    }

    override fun deleteFeed(feedId : Int) {
        jdbi.useHandle<RuntimeException> {
            handle: Handle ->
                handle.createUpdate("DELETE FROM feed_post WHERE feedid = ?").bind(0,feedId).execute()
        }

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM feed WHERE feed_id = ?").bind(0, feedId).execute()
        }

    }

    override fun deleteFeedPost(feedId : Int, postId : Int) : Int? {

        val id = jdbi.withHandle<Int?,RuntimeException> {
                handle: Handle ->
            handle.createUpdate("DELETE FROM feed_post WHERE feedid = ? AND postid = ?")
                .bind(0,feedId)
                .bind(1,postId)
                .execute()
        }

        return id
    }
}
