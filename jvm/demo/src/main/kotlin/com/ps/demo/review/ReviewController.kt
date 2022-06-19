package com.ps.demo.review

import com.ps.data.Review
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/compound/{compoundId}")
@CrossOrigin("http://localhost:3000")
class ReviewController(val reviewService: ReviewService) {

    @GetMapping("/review")
    fun getAllReviews(@PathVariable("compoundId") compoundId : Int,
                      @RequestParam(required = false) page : Int) : ResponseEntity<List<Review>?> {
        val reviews : List<Review>? = reviewService.getAllReviews(compoundId,page)
        return ResponseEntity(reviews, HttpStatus.OK)
    }

    @GetMapping("/review/{reviewId}")
    fun getReviewById(@PathVariable("compoundId") compoundId : Int,
                      @PathVariable("reviewId") reviewId: Int) : ResponseEntity<Review?> {
        val reviews : Review? = reviewService.getReviewById(compoundId,reviewId)
        return ResponseEntity(reviews, HttpStatus.OK)
    }

    @DeleteMapping("/review/{reviewId}")
    fun deleteReview(@PathVariable("reviewId") reviewId : Int) : ResponseEntity<Any?> {
        reviewService.deleteReview(reviewId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/review")
    fun createCompoundReview(@PathVariable("compoundId") compoundId : Int,
                             @PathVariable("userId") userId : Int,
                             @RequestBody review : Review)
            : ResponseEntity<Any?> {
        val reviewKey : Int? = reviewService.createCompoundReview(compoundId,userId,review)
        return ResponseEntity(reviewKey, HttpStatus.OK)
    }

    @PostMapping("/field/{fieldId}/review")
    fun createFieldReview(@PathVariable("compoundId") compoundId : Int,
                          @PathVariable("fieldId") fieldId : Int,
                             @RequestBody review : Review)
            : ResponseEntity<Any?> {
        val reviewKey : Int? = reviewService.createFieldReview(compoundId,fieldId,review)
        return ResponseEntity(reviewKey, HttpStatus.OK)
    }

}