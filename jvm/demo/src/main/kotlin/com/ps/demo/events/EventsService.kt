package com.ps.demo.events

import com.ps.data.Event

interface EventsService {

    fun getEvents() : List<Event>?

    fun createEvent() : Int
}