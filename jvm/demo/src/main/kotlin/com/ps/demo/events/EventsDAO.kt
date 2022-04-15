package com.ps.demo.events

import com.ps.data.Event
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper
import org.jdbi.v3.sqlobject.statement.SqlQuery

interface EventsDAO {

    /*------------------------------- Get -------------------------------*/
    @SqlQuery("SELECT * FROM event where id = 1")
    @RegisterBeanMapper(Event::class)
    fun getEvent() : Event
}