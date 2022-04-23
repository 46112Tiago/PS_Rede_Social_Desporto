package com.ps.demo.compound

import com.ps.data.Compound
import org.antlr.v4.runtime.misc.Pair
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class CompoundRepoImplementation(val jdbi: Jdbi) : CompoundService{

    /*TODO insert in table schedule */
    override fun createCompound(compound: Compound): Int? {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "compound(name,description,summary,location,material,dressingRoom,parking,pictures,accepted) " +
                    "values(?,?,?,?,?,?,?,?)")
                    .bind(0,compound.name)
                    .bind(1,compound.description)
                    .bind(2,compound.summary)
                    .bind(3,compound.location)
                    .bind(4,compound.material)
                    .bind(5,compound.dressingRoom)
                    .bind(6,compound.parking)
                    .bind(7,compound.pictures)
                    .bind(8,false)
                    .execute()
        }
        val toReturn = jdbi.withHandle<Compound?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select id from COMPOUND order by id desc").mapTo<Compound>().one()

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
    override fun getCompoundLocations(): List<Pair<Float, Float>>? {
        val toReturn = jdbi.withHandle<List<Pair<Float, Float>>,RuntimeException> { handle : Handle ->
            handle.createQuery("Select location, id from COMPOUND ")
                    .bind(0,true)
                    .mapTo<Pair<Float, Float>>()
                    .list()
        }

        return toReturn
    }

    /* TODO: See which attributes should retrieve for the info */
    override fun getCompoundInformation(compoundId : Int): Compound? {
        val toReturn = jdbi.withHandle<Compound,RuntimeException> { handle : Handle ->
            handle.createQuery("Select  " +
                    "from COMPOUND " +
                    "WHERE id = ? AND accepted = ?")
                    .bind(0,compoundId)
                    .bind(1,true)
                    .mapTo<Compound>()
                    .one()
        }

        return toReturn
    }

}