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
        val nameTxt =  event.name.replace("\\s".toRegex(), "")
        val descriptionTxt =  event.description.replace("\\s".toRegex(), "")
        val summaryTxt =  event.summary.replace("\\s".toRegex(), "")
        if (event.description.isEmpty() || descriptionTxt.isEmpty() ||
            summaryTxt.isEmpty() || event.summary.isEmpty() || event.summary.length > 250 ||
            nameTxt.isEmpty() || event.name.isEmpty() || event.name.length > 100){
            return -1
        }
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