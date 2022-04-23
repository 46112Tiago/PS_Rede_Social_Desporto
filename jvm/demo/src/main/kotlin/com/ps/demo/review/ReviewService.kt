package com.ps.demo.review

import com.ps.data.Review

interface ReviewService {

    fun createCompoundReview(compoundId : Int, review : Review) : Int?

    fun createFieldReview(compoundId : Int, fieldId : Int, review : Review) : Int?

    fun deleteReview(reviewId : Int)

    fun getAllReviews() : List<Review>?

}