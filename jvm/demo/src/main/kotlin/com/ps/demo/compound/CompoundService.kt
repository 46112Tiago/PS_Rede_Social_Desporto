package com.ps.demo.compound

import com.ps.data.Compound
import com.ps.data.Material
import com.ps.data.Schedule
import org.springframework.stereotype.Service

@Service
class CompoundService(val compoundRepo : CompoundRepoImplementation) {

    fun createCompound(compound : Compound) : Int? {
        return compoundRepo.createCompound(compound)
    }

    fun addMaterial(compoundId: Int, material: Material) : Int? {
        return compoundRepo.addMaterial(compoundId,material)
    }

    fun addSchedule(compoundId: Int, schedule: Schedule) : Int? {
        return compoundRepo.addSchedule(compoundId,schedule)
    }

    fun deleteCompound(compoundId : Int) {
        return compoundRepo.deleteCompound(compoundId)
    }

    fun getCompoundLocations(zoom : Int) : List<Compound?>? {

        return compoundRepo.getCompoundLocations()
    }

    fun getCompoundInformation(compoundId : Int) : Compound? {
        return compoundRepo.getCompoundInformation(compoundId)
    }

    fun acceptCompound(compoundId: Int) {
        return compoundRepo.acceptCompound(compoundId)
    }

}