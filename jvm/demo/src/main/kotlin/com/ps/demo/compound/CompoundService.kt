package com.ps.demo.compound

import com.ps.data.Compound
import com.ps.demo.removeWhitespaces
import org.springframework.stereotype.Service
import java.util.*
import kotlin.math.*
import kotlin.math.pow

@Service
class CompoundService(val compoundRepo : CompoundRepoImplementation) {

    private val AREA_MAP = mapOf(18 to 2, 17 to 4, 16 to 8, 15 to 16,14 to 32,13 to 64, 12 to 128);
    private val AREA_MAP_COMPOUND = mapOf(18 to 1, 17 to 2, 16 to 4, 15 to 8,14 to 16,13 to 32, 12 to 64);

    fun createCompound(compound : Compound) : Int? {

        if (compound.name == null || compound.description == null || compound.summary == null) return -1

        val nameTxt = removeWhitespaces(compound.name)
        val descriptionTxt = removeWhitespaces(compound.description)
        val summaryTxt = removeWhitespaces(compound.summary)

        if (nameTxt.isEmpty() || descriptionTxt.isEmpty() || summaryTxt.isEmpty() ||
            compound.name.isEmpty() || compound.description.isEmpty() || compound.summary.isEmpty()
            || compound.name.length > 100 || compound.summary.length > 100
        )
            return -1

        val compoundId = compoundRepo.createCompound(compound)

        //Insert a new material that wasn't in the db yet 

        if (compound.material!!.isNotEmpty() && compound.material[0].other != null) {
            val newMaterials = compound.material[0].other!!.split(";")
            for (materialName in newMaterials) {
                val newMaterialId = compoundRepo.addMaterial(materialName)
                compoundRepo.addMaterialToCompound(compoundId!!,newMaterialId)
            }
        }

        //Associate the compound with the sports 

        for (sport in compound.sports!!) {
            if (sport.id==null) break
            compoundRepo.addSportToCompound(compoundId!!,sport.id)
        }

        //Associate the materials with the compound

        for (material in compound.material) {
            if (material.other!=null) continue
            if (material.id==null) break
            compoundRepo.addMaterialToCompound(compoundId!!,material.id)
        }

        //Indicates the schedule for the compound

        for (schedule in compound.schedule!!) {
            if (schedule.weekday == null) break
            compoundRepo.addSchedule(compoundId!!,schedule)
        }

        //Add all the fields that are available in the compound 

        for (field in compound.fields!!) {
            if (field.id==null) break
            compoundRepo.addFieldToCompound(compoundId!!,field.name)
        }
        return compoundId
    }

    fun deleteCompound(compoundId: Int) {
        return compoundRepo.deleteCompound(compoundId)
    }

    fun getLocationsBySport(sportId: Int,zoom: Int?,centerLat: Double?,centerLng: Double?) : List<Compound?>? {
        if (zoom == null || centerLat == null || centerLng == null) return listOf()
        var locs = compoundRepo.getLocationsBySport(sportId)!!.filter {
                it -> checkArea(zoom!!,centerLat!!,centerLng!!,it!!.location!!.x,it.location!!.y,AREA_MAP_COMPOUND)
        }
        return locs;
    }

    fun getCompoundInformation(compoundId : Int) : Optional<Compound> {
        return compoundRepo.getCompoundInformation(compoundId)
    }

    fun acceptCompound(compoundId: Int) {
        return compoundRepo.acceptCompound(compoundId)
    }

    fun getCompoundLocations(zoom : Int, centerLat: Double, centerLng: Double) : List<Compound?>? {
        
        // Cant retrieve values for zoom inferior than 12 
        if (zoom < 12) return listOf()
        var locs = compoundRepo.getCompoundLocations()!!.filter {
                it -> checkArea(zoom,centerLat,centerLng,it!!.location!!.x,it.location!!.y,AREA_MAP)
        }
        return locs;
    }




    //Based on: https://www.geeksforgeeks.org/haversine-formula-to-find-distance-between-two-points-on-a-sphere/     06/06/2022
    
    /*
        Check if the coordinate of a compound or field is inside a specific area determined by the zoom value
        Apply the Haversine formula
     */
    
    fun checkArea(zoom : Int, centerLat: Double,centerLng: Double,pointLat : Double, pointLng: Double,area: Map<Int,Int>)
    : Boolean {
        val neededCoverage = area[zoom]
        val radiusEarth = 6371.0

        val theta1 =  convertDegToRad(centerLat)
        val theta2 = convertDegToRad(pointLat)
        val deltaTheta = theta2 - theta1
        val lambda1 =  convertDegToRad(centerLng)
        val lambda2 = convertDegToRad(pointLng)
        val deltaLambda = lambda2 - lambda1
        val sinSquare1 = sin((deltaTheta)/2).pow(2)
        val multiplyCos = cos(theta1) * cos(theta2)
        val sinSquare2 = sin((deltaLambda / 2.0)).pow(2)
        val auxD = multiplyCos * sinSquare2
        val d = 2 * radiusEarth * asin(sqrt(sinSquare1+auxD))

        if(d < neededCoverage!!.toDouble()) {
            return true;
        }
        return false;
    }

/*
    Convert degrees to radians
*/

    private fun convertDegToRad(deg: Double): Double {
        return deg / (180.0/Math.PI)
    }

}