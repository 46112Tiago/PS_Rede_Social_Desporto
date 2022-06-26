package com.ps.demo.compound

import com.ps.data.Compound
import com.ps.data.Field
import com.ps.data.Material
import com.ps.data.Schedule
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class CompoundRepoImplementation(val jdbi: Jdbi){

    /*TODO insert in table schedule, location, material, pictures */
    fun createCompound(compound: Compound) : Int? {

        val toReturn : Compound = jdbi.withHandle<Compound,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "compound(name,description,summary,dressingRoom,parking,accepted,location) " +
                    "values(?,?,?,?,?,?,POINT(?))")
                    .bind(0,compound.name)
                    .bind(1,compound.description)
                    .bind(2,compound.summary)
                    .bind(3,compound.dressingRoom)
                    .bind(4,compound.parking)
                    .bind(5,false)
                    .bind(6,compound.location)
                    .executeAndReturnGeneratedKeys("id").mapTo<Compound>().one()
        }

        return toReturn.id
    }

    fun addMaterialToCompound(compoundId: Int, materialId: Int) {
         jdbi.withHandle<Int,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "MATERIAL_COMPOUND(compoundId,materialId) " +
                    "values(?,?)")
                    .bind(0,compoundId)
                    .bind(1,materialId)
                    .execute()
        }
    }

    fun addSportToCompound(compoundId: Int, sportId: Int) {
        jdbi.withHandle<Int,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "SPORT_COMPOUND(compoundId,sportId) " +
                    "values(?,?)")
                .bind(0,compoundId)
                .bind(1,sportId)
                .execute()
        }
    }

    fun addMaterial(materialName: String) : Int {
        val toReturn = jdbi.withHandle<Int,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "MATERIALS(name) " +
                    "values(?)")
                .bind(0,materialName)
                .executeAndReturnGeneratedKeys("id").mapTo<Int>().one()
        }
        return toReturn
    }

    fun addFieldToCompound(compoundId: Int, fieldName: String) {

        jdbi.withHandle<Int,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "field(compoundId,name,accepted) " +
                    "values(?,?,?)")
                .bind(0,compoundId)
                .bind(1,fieldName)
                .bind(2,false)
                .execute()
        }
    }

    fun addSchedule(compoundId: Int, schedule: Schedule){
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "Schedule(compoundId,weekday,openingHour,closingHour,optionalDescription) " +
                    "values(?,?,?,?,?)")
                    .bind(0,compoundId)
                    .bind(1,schedule.weekday)
                    .bind(2,schedule.openingHour)
                    .bind(3,schedule.closingHour)
                    .bind(4,schedule.optionalDescription)
                    .execute()
        }

    }

    fun deleteCompound(compoundId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM COMPOUND WHERE id = ?  ")
                    .bind(0, compoundId)
                    .execute()
        }
    }

    fun getCompoundLocations(): List<Compound?>? {
        val toReturn = jdbi.withHandle<List<Compound?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select location, id, name from COMPOUND " +
                        "where accepted = ? ")
                    .bind(0,true)
                    .mapTo<Compound>()
                    .list()
        }

        return toReturn
    }

    fun getLocationsBySport(sportId: Int): List<Compound?>? {
        val toReturn = jdbi.withHandle<List<Compound?>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select location, id, name from COMPOUND JOIN SPORT_COMPOUND ON id = compoundId " +
                    "where accepted = ? AND sportId = ?")
                .bind(0,true)
                .bind(1,sportId)
                .mapTo<Compound>()
                .list()
        }

        return toReturn
    }

    fun getCompoundInformation(compoundId : Int): Compound? {
        val toReturn = jdbi.withHandle<Compound?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select name, description, location, dressingRoom, summary, parking " +
                    "from COMPOUND " +
                    "WHERE id = ? AND accepted = ?")
                    .bind(0,compoundId)
                    .bind(1,true)
                    .mapTo<Compound>()
                    .one()
        }

        return toReturn
    }

    fun acceptCompound(compoundId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" UPDATE COMPOUND " +
                    "SET accepted = ?" +
                    "WHERE id = ? ")
                    .bind(0, true)
                    .bind(1,compoundId)
                    .execute()
        }
    }

}