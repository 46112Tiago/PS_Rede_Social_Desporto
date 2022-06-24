package com.ps.demo

import com.ps.data.Post
import com.ps.data.Review
import com.ps.data.User
import com.ps.demo.review.ReviewController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.HttpStatus.NOT_FOUND
import java.sql.Timestamp
import java.time.LocalDateTime
import kotlin.math.absoluteValue

@SpringBootTest
class ReviewTest {

    @Autowired
    var reviewController: ReviewController? = null

    @Test
    fun createDeleteReview() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val review = Review(null,null,null,null,4.9f,"New review for test.",timestamp)
        val reviewResponse = reviewController!!.createCompoundReview(14,"projeto.seminario2022",review)
        val reviewId = reviewResponse.body!!.absoluteValue
        Assertions.assertNotNull(reviewId)
        reviewController!!.deleteReview(reviewId)
        val getReview = reviewController!!.getReviewById(14,reviewId)
        Assertions.assertEquals(NOT_FOUND,getReview.statusCode)
    }

    @Test
    fun createReviewValuesSuperiorThanLimit() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val review = Review(null,null,null,null,5.1f,"New review for test.",timestamp)
        val reviewResponse = reviewController!!.createCompoundReview(14,"projeto.seminario2022",review)
        Assertions.assertEquals(BAD_REQUEST,reviewResponse.statusCode)
    }

    @Test
    fun createReviewValuesInferiorThanLimit() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val review = Review(null,null,null,null,-0.1f,"New review for test.",timestamp)
        val reviewResponse = reviewController!!.createCompoundReview(14,"projeto.seminario2022",review)
        Assertions.assertEquals(BAD_REQUEST,reviewResponse.statusCode)
    }

    @Test
    fun createReviewWithTooManyCharacters() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val review = Review(null,null,null,null,5.0f,"New review for test. New review for test. New review for test. New review for test. New review for test.",timestamp)
        val reviewResponse = reviewController!!.createCompoundReview(14,"projeto.seminario2022",review)
        Assertions.assertEquals(BAD_REQUEST,reviewResponse.statusCode)
    }

    @Test
    fun createReviewWithoutCharacters() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val review = Review(null,null,null,null,0.0f,"",timestamp)
        val reviewResponse = reviewController!!.createCompoundReview(14,"projeto.seminario2022",review)
        Assertions.assertEquals(BAD_REQUEST,reviewResponse.statusCode)
    }

    @Test
    fun createReviewWithOnlyWhitespaces() {
        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)
        val review = Review(null,null,null,null,0.0f,"                  ",timestamp)
        val reviewResponse = reviewController!!.createCompoundReview(14,"projeto.seminario2022",review)
        Assertions.assertEquals(BAD_REQUEST,reviewResponse.statusCode)
    }

    @Test
    fun getReviewPaging() {
        val user = User(2,"Joana","Gomes",null,null,null,null,null,null, listOf(),null)
        val review1 = Review(25,null,null,user,4.5f,"What a fun course!",null)
        val review2 = Review(24,null,null,user,4.5f,"Owners are lovely! Very polite and accommodating.",null)
        val reviews = listOf<Review>(review1,review2)
        var page = 0
        val reviewResponse0 = reviewController!!.getAllReviews(14,page)
        Assertions.assertEquals(5,reviewResponse0.body!!.size)
        page += 1
        val reviewResponse1 = reviewController!!.getAllReviews(14,page)
        Assertions.assertEquals(2,reviewResponse1.body!!.size)
        Assertions.assertEquals(reviews,reviewResponse1.body)
    }

    @Test
    fun getReviewNegativePaging() {
        val postResponse = reviewController!!.getAllReviews(14,-1)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,postResponse.statusCode)
    }



}