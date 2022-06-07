package com.ps.demo.events

import com.ps.data.Event
import org.springframework.stereotype.Service

@Service
class EventsService(val eventRepo: EventRepositoryImplementation) {

    fun getActiveEvents(page : Int) : List<Event?>? {
        return eventRepo.getActiveEvents(page)
    }

    fun getUserEvents(userId : Int,eventId: Int) : List<Event>? {
        return eventRepo.getUserEvents(userId,eventId)
    }

    fun getUserEventsParticipating(userId : Int, page: Int) : List<Event?>? {
        return eventRepo.getUserEventsParticipating(userId, page)
    }

    fun getUserEventsCreated(userId : Int, page: Int) : List<Event?>? {
        return eventRepo.getUserEventsCreated(userId, page)
    }

    fun getEventDescription(eventId: Int) : Event? {
        return eventRepo.getEventDescription(eventId)
    }

    fun createEvent(event : Event) : Int {
        return eventRepo.createEvent(event)
    }

    fun participateEvent(participantId : Int, eventId : Int) : Int {
        return eventRepo.participateEvent(participantId,eventId)
    }

    fun cancelEvent(eventId : Int) {
        return eventRepo.cancelEvent(eventId)
    }

    fun getEventsNotParticipating(userId : Int, page: Int) : List<Event?>? {
        return eventRepo.getEventsNotParticipating(page,userId)
    }


}