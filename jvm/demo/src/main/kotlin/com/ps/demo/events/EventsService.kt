package com.ps.demo.events

import com.ps.data.Event

interface EventsService {

    fun getActiveEvents() : List<Event>?

    fun getUserEvents(userId : Int,eventId: Int) : List<Event>?

    fun getEventDescription(eventId: Int) : String?

    fun createEvent(event : Event) : Int

    fun participateEvent(participantId : Int, eventId : Int) : Int

    fun cancelEvent(eventId : Int)


}