package com.ps.demo.feed

import com.ps.data.Feed
import com.ps.data.Post
import com.ps.data.User
import com.ps.demo.feed.FeedRepoImplementation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.sql.Timestamp

@RestController
@RequestMapping
class FeedController @Autowired constructor (val feedRepo : FeedRepoImplementation) {


    @GetMapping("/feeds")
    fun getFeeds() : ResponseEntity<List<Feed?>> {
        val feeds = feedRepo.getFeeds()
        return ResponseEntity(feeds, HttpStatus.OK)
    }

    @GetMapping("/feed/{feedId}")
    fun getFeedById(@PathVariable("feedId") feedId : Int) : ResponseEntity<Feed?> {
        val feed : Feed? = feedRepo.getFeedById(feedId)
        return ResponseEntity(feed, HttpStatus.OK)
    }

    @GetMapping("/feed/{feedId}/user")
    fun getFeedUser(@PathVariable("feedId") feedId: Int) : ResponseEntity<User?> {
        val user : User? = feedRepo.getFeedUser(1)
        return ResponseEntity(user,HttpStatus.OK)
    }

    @GetMapping("/feed/{feedid}/posts")
    fun getFeedPosts(@PathVariable("feedid") feedId: Int) : ResponseEntity<Any?> {
        val posts = feedRepo.getFeedPosts(feedId)
        return ResponseEntity(posts,HttpStatus.OK)
    }

    @GetMapping("/feed/user/{userid}")
    fun getUserFeeds(@PathVariable("userid") userId: Int) : ResponseEntity<Any?> {
        val feeds = feedRepo.getFeedByUserId(userId)
        return ResponseEntity(feeds,HttpStatus.OK)
    }


    @PostMapping("/feed")
    fun createFeed() : ResponseEntity<Any?> {
        val us = User(1,"Diogo","Fernandes","Torres Vedras", null,null,"diogotag@gmail.com",true,"Male")
        val feed = Feed(
            null,
            us,
            emptyList()
        )
        val feedKey : Int? = feedRepo.insertFeed(feed)
        return ResponseEntity(feedKey, HttpStatus.OK)
    }

    @PostMapping("/feed/{feedid}/post/{postid}")
    fun createFeedPost(@PathVariable("feedid") feedId: Int, @PathVariable("postid") postId : Int): ResponseEntity<Int?> {
        val us = User(1,"Diogo","Fernandes","Torres Vedras", null,null,"diogotag@gmail.com",true,"Male")

        val feed = Feed(
            null,
            us,
            emptyList()
        )

        val postObj = Post(
            null,
            "test post",
            emptyArray(),
            Timestamp(System.currentTimeMillis()),
            us,
            0
        )
        val post = feedRepo.insertFeedPost(feed,postObj)
        return ResponseEntity(post,HttpStatus.OK)
    }

    @DeleteMapping("/feed/{feedId}")
    fun deleteFeed(@PathVariable("feedId") feedId : Int) : ResponseEntity<Any?> {
        feedRepo.deleteFeed(feedId)
        return ResponseEntity(HttpStatus.OK)
    }
    @DeleteMapping("/feed/{feedid}/participant/{postid}")
    fun deleteFeedPost(@PathVariable("feedid") feedId : Int, @PathVariable("postid") postId : Int ) : ResponseEntity<Any?> {
        val post = feedRepo.deleteFeedPost(feedId,postId)
        return ResponseEntity(post,HttpStatus.OK)
    }


}
