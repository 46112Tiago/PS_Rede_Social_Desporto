package com.ps.demo.review

import com.ps.data.Review
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class ReviewRepoImplementation(val jdbi:Jdbi)  {

    fun createCompoundReview(compoundId: Int, review : Review): Int? {

        val toReturn = jdbi.withHandle<Review,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "review(compoundId,rating,description) " +
                    "values(?,?,?)")
                    .bind(0,compoundId)
                    .bind(1,review.rating)
                    .bind(2,review.description)
                    .executeAndReturnGeneratedKeys("id").mapTo<Review>().one()
        }

        return toReturn.id
    }

     fun createFieldReview(compoundId: Int, fieldId: Int, review : Review): Int? {
        val toReturn = jdbi.withHandle<Review,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "review(fieldId,compoundId,rating,description) " +
                    "values(?,?,?,?)")
                    .bind(0,fieldId)
                    .bind(1,compoundId)
                    .bind(2,review.rating)
                    .bind(3,review.description)
                    .executeAndReturnGeneratedKeys("id").mapTo<Review>().one()
        }

        return toReturn.id
    }


     fun deleteReview(reviewId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM REVIEW WHERE id = ?")
                    .bind(0, reviewId)
                    .execute()
        }
    }

     fun getAllReviews(compoundId: Int): List<Review>? {

        val toReturn = jdbi.withHandle<List<Review>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select rating, description, id " +
                    "from REVIEW " +
                    "Where compoundId = ?")
                    .bind(0,compoundId)
                    .mapTo<Review>().list()
        }

        return toReturn
    }

}