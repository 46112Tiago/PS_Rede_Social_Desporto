package com.ps.demo.compound

import com.ps.data.Compound
import com.ps.data.Material
import com.ps.data.Schedule
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class CompoundRepoImplementation(val jdbi: Jdbi) : CompoundService{

    /*TODO insert in table schedule, location, material, pictures */
    override fun createCompound(compound: Compound) : Int? {
        val toReturn : Compound = jdbi.withHandle<Compound,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "compound(name,description,summary,dressingRoom,parking,accepted,location) " +
                    "values(?,?,?,?,?,?,?)")
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

    override fun addMaterial(compoundId: Int, material: Material): Int? {
        val toReturn : Material = jdbi.withHandle<Material,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "Material(name,compoundId) " +
                    "values(?,?)")
                    .bind(0,material.name)
                    .bind(1,compoundId)
                    .executeAndReturnGeneratedKeys("id").mapTo<Material>().one()
        }

        return toReturn.id
    }

    override fun addSchedule(compoundId: Int, schedule: Schedule): Int? {
        val toReturn : Schedule = jdbi.withHandle<Schedule,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "Schedule(compoundId,weekday,openingHour,closingHour,optionalDescription) " +
                    "values(?,?,?,?,?)")
                    .bind(0,compoundId)
                    .bind(1,schedule.weekday)
                    .bind(2,schedule.openingHour)
                    .bind(3,schedule.closingHour)
                    .bind(4,schedule.optionalDescription)
                    .executeAndReturnGeneratedKeys("id").mapTo<Schedule>().one()
        }

        return toReturn.id
    }

    override fun deleteCompound(compoundId : Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM COMPOUND WHERE id = ?  ")
                    .bind(0, compoundId)
                    .execute()
        }
    }

    /* TODO: Bring only x locations */
    override fun getCompoundLocations(): List<Compound>? {
        val toReturn = jdbi.withHandle<List<Compound>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select location, id from COMPOUND where accepted = ? ")
                    .bind(0,true)
                    .mapTo<Compound>()
                    .list()
        }

        return toReturn
    }

    /* TODO: See which attributes should retrieve for the info */
    override fun getCompoundInformation(compoundId : Int): Compound? {
        val toReturn = jdbi.withHandle<Compound?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select name, description, material, location,dressingRoom, summary, parking " +
                    "from COMPOUND " +
                    "WHERE id = ? AND accepted = ?")
                    .bind(0,compoundId)
                    .bind(1,true)
                    .mapTo<Compound>()
                    .one()
        }

        return toReturn
    }

    override fun acceptCompound(compoundId: Int) {
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