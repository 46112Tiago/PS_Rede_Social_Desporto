package com.ps.demo.review

import com.ps.data.Review
import com.ps.demo.removeWhitespaces
import org.springframework.stereotype.Service

@Service
class ReviewService(val reviewRepo : ReviewRepoImplementation) {

    fun createCompoundReview(compoundId : Int, userId:Int, review : Review) : Int? {
        //Check if the values have been introduced correctly        
        val reviewTxt =  removeWhitespaces(review.description!!)
        if (review.rating > 5.0f || review.rating < 0.0f || review.description == null || review.description.isEmpty()
            || reviewTxt.isEmpty() || review.description.length > 100)
            return -1
        return reviewRepo.createCompoundReview(compoundId,userId,review)
    }

    fun createFieldReview(compoundId : Int, fieldId : Int, review : Review, userId: Int) : Int? {
        //Check if the values have been introduced correctly
        val reviewTxt =  removeWhitespaces(review.description!!)
        if (review.rating > 5.0f || review.rating < 0.0f || review.description == null || review.description.isEmpty()
            || reviewTxt.isEmpty() || review.description.length > 100)
            return -1
        return reviewRepo.createFieldReview(compoundId,fieldId, review, userId)
    }

    fun deleteReview(reviewId : Int) {
        return reviewRepo.deleteReview(reviewId)
    }

    fun getAllReviews(compoundId: Int, page: Int) : List<Review>? {
        if (page < 0) return null
        return reviewRepo.getAllReviews(compoundId,page)
    }

    fun getReviewById(compoundId: Int, reviewId: Int) : Review? {
        return reviewRepo.getReviewById(compoundId,reviewId)
    }

}