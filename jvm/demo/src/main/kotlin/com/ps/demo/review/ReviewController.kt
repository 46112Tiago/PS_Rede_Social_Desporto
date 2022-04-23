package com.ps.demo.review

import com.ps.data.Comment
import com.ps.data.Review
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/compound/{compoundId}")
class ReviewController(val reviewRepo : ReviewRepoImplementation) {

    @GetMapping("/review")
    fun getAllReviews(@PathVariable("postId") postId : Int) : ResponseEntity<List<Review>?> {
        val reviews : List<Review>? = reviewRepo.getAllReviews()
        return ResponseEntity(reviews, HttpStatus.OK)
    }

    @DeleteMapping("/review/{reviewId}")
    fun deleteReview(@PathVariable("reviewId") reviewId : Int) : ResponseEntity<Any?> {
        reviewRepo.deleteReview(reviewId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/review")
    fun createCompoundReview(@PathVariable("compoundId") compoundId : Int,
                             @RequestBody review : Review)
            : ResponseEntity<Any?> {
        val reviewKey : Int? = reviewRepo.createCompoundReview(compoundId,review)
        return ResponseEntity(reviewKey, HttpStatus.OK)
    }

    @PostMapping("/field/{fieldId}/review")
    fun createFieldReview(@PathVariable("compoundId") compoundId : Int,
                          @PathVariable("fieldId") fieldId : Int,
                             @RequestBody review : Review)
            : ResponseEntity<Any?> {
        val reviewKey : Int? = reviewRepo.createFieldReview(compoundId,fieldId,review)
        return ResponseEntity(reviewKey, HttpStatus.OK)
    }

}