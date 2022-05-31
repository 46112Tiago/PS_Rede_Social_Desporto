package com.ps.demo.compound

import com.ps.data.Compound
import com.ps.data.Material
import com.ps.data.Schedule
import org.springframework.stereotype.Service

@Service
class CompoundService(val compoundRepo : CompoundRepoImplementation) {

    private val AREA_MAP = mapOf(18 to 2, 17 to 4, 16 to 8, 15 to 16,14 to 32,13 to 64, 12 to 128);

    fun createCompound(compound : Compound) : Int? {
        val compoundId = compoundRepo.createCompound(compound)
        if (compound.material == null || compound.material.isEmpty()) return compoundId
        for (material in compound.material) {
            compoundRepo.addMaterial(compoundId!!,material.id!!)
        }
        if (compound.schedule == null || compound.schedule.isEmpty()) return compoundId
        for (schedule in compound.schedule) {
            compoundRepo.addSchedule(compoundId!!,schedule)
        }
        return compoundId
    }

    fun deleteCompound(compoundId : Int) {
        return compoundRepo.deleteCompound(compoundId)
    }

    fun getCompoundLocations(zoom : Int, centerLat: Double, centerLng: Double) : List<Compound?>? {
        if (zoom < 12) return listOf()
        var locs = compoundRepo.getCompoundLocations()!!.filter {
            it -> checkArea(zoom,centerLat,centerLng,it!!.location!!.x,it.location!!.y)
        }
        return locs;
    }

    fun getLookingLocations() : List<Compound?>? {
        return compoundRepo.getCompoundLocations()
    }

    fun getCompoundInformation(compoundId : Int) : Compound? {
        return compoundRepo.getCompoundInformation(compoundId)
    }

    fun acceptCompound(compoundId: Int) {
        return compoundRepo.acceptCompound(compoundId)
    }

    fun checkArea(zoom : Int, centerLat: Double,centerLng: Double,pointLat : Double, pointLng: Double) : Boolean {
        val neededCoverage = AREA_MAP.get(zoom)
        val theta: Double = centerLng - pointLng
        var dist = (Math.sin(deg2rad(centerLat))
                * Math.sin(deg2rad(pointLat))
                + (Math.cos(deg2rad(centerLat))
                * Math.cos(deg2rad(pointLat))
                * Math.cos(deg2rad(theta))))
        dist = Math.acos(dist)
        dist = rad2deg(dist)
        dist = dist * 60 * 1.1515
        if(dist < neededCoverage!!.toDouble()) {
            return true;
        }

        return false;

    }

    private fun deg2rad(deg: Double): Double {
        return deg * Math.PI / 180.0
    }

    private fun rad2deg(rad: Double): Double {
        return rad * 180.0 / Math.PI
    }
}