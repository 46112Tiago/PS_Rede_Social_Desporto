package com.ps.demo.test

import com.ps.data.Event
import com.ps.data.Test
import com.ps.demo.events.EventsDAO
import com.ps.demo.events.EventsRepositoryInterface
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.withExtensionUnchecked
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

@Repository
class TestRepoImplementation @Autowired constructor(var jdbi: Jdbi) : TestService {

    override fun getTest(): List<Test> {

        val toReturn = jdbi.withExtensionUnchecked(TestDAO::class) { dao: TestDAO ->
            dao.getTest()
        }
        return toReturn
    }

    override fun getTestById(): Test? {
        val toReturn = jdbi.withExtensionUnchecked(TestDAO::class) { dao: TestDAO ->
            dao.getTestById()
        }
        return toReturn
    }

    override fun deleteTest(testId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("DELETE FROM test WHERE id = ?").bind(0, testId).execute()
        }
    }

    override fun insertTest(): Int {
        val toReturn = jdbi.withExtensionUnchecked(TestDAO::class) { dao: TestDAO ->
            dao.insertTest()
        }
        return toReturn
    }
}