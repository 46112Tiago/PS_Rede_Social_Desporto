package com.ps.demo.review

import com.ps.data.Review
import com.ps.demo.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/compound/{compoundId}")
@CrossOrigin("http://localhost:3000")
class ReviewController(val reviewService: ReviewService, val userService: UserService) {

    @GetMapping("/review")
    fun getAllReviews(@PathVariable("compoundId") compoundId : Int,
                      @RequestParam() page : Int) : ResponseEntity<List<Review>?> {
        val reviews : List<Review>? = reviewService.getAllReviews(compoundId,page) ?: return ResponseEntity(BAD_REQUEST)
        return ResponseEntity(reviews, HttpStatus.OK)
    }

    @GetMapping("/review/{reviewId}")
    fun getReviewById(@PathVariable("compoundId") compoundId : Int,
                      @PathVariable("reviewId") reviewId: Int) : ResponseEntity<Any> {
        val reviews : Review = reviewService.getReviewById(compoundId,reviewId)
            ?: return ResponseEntity("Resource not found",HttpStatus.NOT_FOUND)
        return ResponseEntity(reviews, HttpStatus.OK)
    }

    @DeleteMapping("/review/{reviewId}")
    fun deleteReview(@PathVariable("reviewId") reviewId : Int) : ResponseEntity<Any> {
        reviewService.deleteReview(reviewId)
        return ResponseEntity("Review $reviewId deleted",HttpStatus.OK)
    }

    @PostMapping("/review")
    fun createCompoundReview(@PathVariable("compoundId") compoundId : Int,
                             @RequestParam() email : String,
                             @RequestBody review : Review)
            : ResponseEntity<Any> {

        val userId = userService.getUserById(email)!!.userId
        val reviewKey : Int? = reviewService.createCompoundReview(compoundId,userId!!,review)
        if (reviewKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(reviewKey, HttpStatus.OK)
    }

    @PostMapping("/field/{fieldId}/review")
    fun createFieldReview(@PathVariable("compoundId") compoundId : Int,
                          @PathVariable("fieldId") fieldId : Int,
                          @RequestBody review : Review,
                          @RequestParam() email : String)
            : ResponseEntity<Any> {
        val userId = userService.getUserById(email)!!.userId
        val reviewKey : Int? = reviewService.createFieldReview(compoundId,fieldId,review,userId!!)
        if (reviewKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(reviewKey, HttpStatus.OK)
    }

}