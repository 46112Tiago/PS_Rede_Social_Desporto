package com.ps.demo.test

import com.ps.data.Test
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class TestRepoImplementation @Autowired constructor(var jdbi: Jdbi) : TestService {
    override fun getTest(): List<Test> {
        val toReturn = jdbi.withHandle<List<Test>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from test ").mapTo<Test>().list()

        }

        return toReturn
    }


    override fun getTestById(): Test? {
        val toReturn = jdbi.withHandle<Test?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from test where id = 1").mapTo<Test>().one()

        }

        return toReturn
    }

    override fun deleteTest(testId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM test WHERE id = ?").bind(0, testId).execute()
        }
    }

    override fun insertTest(): Int {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into test(id) values(1)").execute()
        }
        val toReturn = jdbi.withHandle<Test?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select * from test order by id desc").mapTo<Test>().one()

        }
        return toReturn.id!!
    }

}