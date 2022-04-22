package com.ps.demo.feed

import com.ps.data.User
import com.ps.data.Feed
import com.ps.data.Post

interface FeedService {

    fun getFeeds() : List<Feed?>

    fun getFeedById(feedId : Int) : Feed?

    fun getFeedUser(feedId : Int) : User?

    //fun getFeedParticipantById(feedId : Int, userId : Int) : User?

    fun deleteFeed(feedId : Int)

    fun insertFeed(feed : Feed) : Int?

    fun getFeedPosts(feedId : Int): List<Post?>

    fun insertFeedPost(feed : Feed, post: Post): Int?

    fun getFeedByUserId(userId : Int): Feed?

    fun deleteFeedPost(feedId : Int, postId : Int) : Int?
}
