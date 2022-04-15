package com.ps.demo.events

import com.ps.data.Event

interface EventsRepositoryInterface {
    fun getEvent() : Event
}