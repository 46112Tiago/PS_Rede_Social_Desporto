package com.ps.demo.review

import com.ps.data.Review
import org.springframework.stereotype.Service

@Service
class ReviewService(val reviewRepo : ReviewRepoImplementation) {

    fun createCompoundReview(compoundId : Int, userId:Int, review : Review) : Int? {
        val reviewTxt =  review.description!!.replace("\\s".toRegex(), "")
        if (review.rating > 5.0f || review.rating < 0.0f || review.description == null || review.description.isEmpty() || reviewTxt.isEmpty() || review.description.length > 100)
            return -1
        return reviewRepo.createCompoundReview(compoundId,userId,review)
    }

    fun createFieldReview(compoundId : Int, fieldId : Int, review : Review) : Int? {
        return reviewRepo.createFieldReview(compoundId,fieldId, review)
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