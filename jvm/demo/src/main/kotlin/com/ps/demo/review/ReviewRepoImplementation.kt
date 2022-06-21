package com.ps.demo.review

import com.ps.data.*
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinMapper
import org.jdbi.v3.core.kotlin.mapTo
import org.jdbi.v3.core.mapper.RowMapperFactory
import org.jdbi.v3.core.result.RowView
import org.springframework.stereotype.Repository
import java.sql.Timestamp
import java.time.LocalDateTime

@Repository
class ReviewRepoImplementation(val jdbi:Jdbi)  {

    fun createCompoundReview(compoundId: Int, userId: Int, review : Review): Int? {

        val current = LocalDateTime.now()
        val timestamp : Timestamp = Timestamp.valueOf(current)

        val toReturn = jdbi.withHandle<Review,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "review(compoundId,rating,description,userId,reviewDate) " +
                    "values(?,?,?,?,?)")
                    .bind(0,compoundId)
                    .bind(1,review.rating)
                    .bind(2,review.description)
                    .bind(3,userId)
                    .bind(4,timestamp)
                .executeAndReturnGeneratedKeys("id").mapTo<Review>().one()
        }

        return toReturn.id
    }

     fun createFieldReview(compoundId: Int, fieldId: Int, review : Review): Int? {

         val current = LocalDateTime.now()
         val timestamp : Timestamp = Timestamp.valueOf(current)

        val toReturn = jdbi.withHandle<Review,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "review(fieldId,compoundId,rating,description,reviewDate) " +
                    "values(?,?,?,?,?)")
                    .bind(0,fieldId)
                    .bind(1,compoundId)
                    .bind(2,review.rating)
                    .bind(3,review.description)
                    .bind(4,timestamp)
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

    fun factory(type: Class<*>, prefix: String): RowMapperFactory {
        return RowMapperFactory.of(type, KotlinMapper(type, prefix))
    }


    fun getAllReviews(compoundId: Int, page: Int): List<Review>? {

        val toReturn = jdbi.withHandle<List<Review>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select rating as r_rating, description as r_description, R.id as r_id, " +
                    "U.userId as u_userId, firstName as u_firstName, lastName as u_lastName " +
                    "from REVIEW R JOIN USER_PROFILE U ON U.userid = R.userid " +
                    "Where compoundId = ? " +
                    "ORDER BY reviewDate DESC " +
                    "LIMIT 5 OFFSET ?")
                    .bind(0,compoundId)
                    .bind(1,page*5)
                .registerRowMapper(factory(Review::class.java, "r"))
                .registerRowMapper(factory(User::class.java, "u"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Review>, rowView: RowView ->
                    val review = map.computeIfAbsent(rowView.getColumn("r_id", Int::class.javaObjectType)) {
                        rowView.getRow(Review::class.java)
                    }

                    if (rowView.getColumn("u_userId", Int::class.javaObjectType) != null) {
                        review.user = rowView.getRow(User::class.java)
                    }

                    map
                }.values.toList()
        }
         return toReturn
    }

    fun getReviewById(compoundId: Int, reviewId: Int): Review? {

        val toReturn = jdbi.withHandle<Review?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select rating as r_rating, description as r_description, R.id as r_id, " +
                    "U.userId as u_userId, firstName as u_firstName, lastName as u_lastName " +
                    "from REVIEW R JOIN USER_PROFILE U ON U.userid = R.userid " +
                    "Where compoundId = ? AND R.id = ?")
                .bind(0,compoundId)
                .bind(1,reviewId)
                .registerRowMapper(factory(Review::class.java, "r"))
                .registerRowMapper(factory(User::class.java, "u"))
                .reduceRows(linkedMapOf()) { map: LinkedHashMap<Int, Review>, rowView: RowView ->
                    val review = map.computeIfAbsent(rowView.getColumn("r_id", Int::class.javaObjectType)) {
                        rowView.getRow(Review::class.java)
                    }

                    if (rowView.getColumn("u_userId", Int::class.javaObjectType) != null) {
                        review.user = rowView.getRow(User::class.java)
                    }

                    map
                }[reviewId]
        }
        return toReturn
    }

}