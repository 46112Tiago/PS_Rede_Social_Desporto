package com.ps.demo.review

import com.ps.data.Review
import org.springframework.stereotype.Service

@Service
class ReviewService(val reviewRepo : ReviewRepoImplementation) {

    fun createCompoundReview(compoundId : Int, userId:Int, review : Review) : Int? {
        return reviewRepo.createCompoundReview(compoundId,userId,review)
    }

    fun createFieldReview(compoundId : Int, fieldId : Int, review : Review) : Int? {
        return reviewRepo.createFieldReview(compoundId,fieldId, review)
    }

    fun deleteReview(reviewId : Int) {
        return reviewRepo.deleteReview(reviewId)
    }

    fun getAllReviews(compoundId: Int) : List<Review>? {
        return reviewRepo.getAllReviews(compoundId)
    }

}