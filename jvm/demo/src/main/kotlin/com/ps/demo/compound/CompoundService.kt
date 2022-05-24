package com.ps.demo.compound

import com.ps.data.Compound
import com.ps.data.Material
import com.ps.data.Schedule

interface CompoundService {

    fun createCompound(compound : Compound) : Int?

    fun addMaterial(compoundId: Int, material: Material) : Int?

    fun addSchedule(compoundId: Int, schedule: Schedule) : Int?

    fun deleteCompound(compoundId : Int)

    fun getCompoundLocations() : List<Compound?>?

    fun getCompoundInformation(compoundId : Int) : Compound?

    fun acceptCompound(compoundId: Int)

}