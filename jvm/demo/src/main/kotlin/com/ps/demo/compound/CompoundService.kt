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

        if (compound.material!!.isNotEmpty() && compound.material[0].other != null) {
            val newMaterials = compound.material[0].other!!.split(";")
            for (materialName in newMaterials) {
                val newMaterialId = compoundRepo.addMaterial(materialName)
                compoundRepo.addMaterialToCompound(compoundId!!,newMaterialId)
            }
        }

        for (sport in compound.sports!!) {
            if (sport.id==null) break
            compoundRepo.addSportToCompound(compoundId!!,sport.id!!)
        }
        for (material in compound.material) {
            if (material.other!=null) continue
            if (material.id==null) break
            compoundRepo.addMaterialToCompound(compoundId!!,material.id!!)
        }
        for (schedule in compound.schedule!!) {
            if (schedule.weekday==null) break
            compoundRepo.addSchedule(compoundId!!,schedule)
        }
        for (field in compound.fields!!) {
            if (field.id==null) break
            compoundRepo.addFieldToCompound(compoundId!!,field.name!!)
        }
        return compoundId
    }

    fun deleteCompound(compoundId: Int) {
        return compoundRepo.deleteCompound(compoundId)
    }

    fun getLookingLocations(sportId: Int) : List<Compound?>? {
        return compoundRepo.getCompoundLooking(sportId)
    }

    fun getCompoundInformation(compoundId : Int) : Compound? {
        return compoundRepo.getCompoundInformation(compoundId)
    }

    fun acceptCompound(compoundId: Int) {
        return compoundRepo.acceptCompound(compoundId)
    }

    fun getCompoundLocations(zoom : Int, centerLat: Double, centerLng: Double) : List<Compound?>? {
        if (zoom < 12) return listOf()
        var locs = compoundRepo.getCompoundLocations()!!.filter {
                it -> checkArea(zoom,centerLat,centerLng,it!!.location!!.x,it.location!!.y)
        }
        return locs;
    }

    fun checkArea(zoom : Int, centerLat: Double,centerLng: Double,pointLat : Double, pointLng: Double)
    : Boolean {
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
        dist = dist * 1.609344
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