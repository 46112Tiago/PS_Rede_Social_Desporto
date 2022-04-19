package com.ps.demo.test

import com.ps.data.Event
import com.ps.data.Test
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper
import org.jdbi.v3.sqlobject.customizer.Bind
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys
import org.jdbi.v3.sqlobject.statement.SqlQuery
import org.jdbi.v3.sqlobject.statement.SqlUpdate
import org.jdbi.v3.sqlobject.transaction.Transaction

interface TestDAO {
    /*------------------------------- Get -------------------------------*/
    @SqlQuery("SELECT * from test")
    @RegisterBeanMapper(Test::class)
    fun getTest() : List<Test>

    @Transaction
    @SqlQuery("SELECT * from test where id = 1")
    @RegisterBeanMapper(Test::class)
    fun getTestById() : Test?


    @Transaction
    @SqlUpdate("DELETE FROM test WHERE id = 1")
    fun deleteTest()

    @Transaction
    @GetGeneratedKeys
    @SqlUpdate("INSERT INTO test (id) VALUES (1)")
    fun insertTest() : Int

}