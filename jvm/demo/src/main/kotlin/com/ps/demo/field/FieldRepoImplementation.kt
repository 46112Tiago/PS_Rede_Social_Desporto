package com.ps.demo.field

import com.ps.data.Compound
import com.ps.data.Field
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository
import java.util.*

@Repository
class FieldRepoImplementation(val jdbi : Jdbi) : FieldService{

    /*TODO add pictures and location*/
    override fun createField(field: Field): Int? {
        val compoundId = jdbi.withHandle<Compound,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "compound(name,parking,accepted) " +
                    "values(?,?,?)")
                    .bind(0,field.compound!!.name)
                    .bind(1, field.compound.parking)
                    .bind(2,false)
                    .executeAndReturnGeneratedKeys("id").mapTo<Compound>().one()
        }

        val toReturn = jdbi.withHandle<Field,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "field(compoundId,name,accepted) " +
                    "values(?,?,?)")
                    .bind(0,compoundId.id)
                    .bind(1,field.name)
                    .bind(2,false)
                    .executeAndReturnGeneratedKeys("id").mapTo<Field>().one()
        }

        return toReturn.id
    }

    /*TODO add pictures*/
    override fun addFieldToCompound(compoundId: Int, field: Field): Int? {

        val toReturn = jdbi.withHandle<Field,RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "field(compoundId,name,accepted) " +
                    "values(?,?,?)")
                    .bind(0,compoundId)
                    .bind(1,field.name)
                    .bind(2,false)
                    .executeAndReturnGeneratedKeys("id").mapTo<Field>().one()
        }

        return toReturn.id
    }

    override fun deleteField(fieldId: Int) {
        val compound = jdbi.withHandle<Field?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select compoundId from Field " +
                    "where id = ?")
                    .bind(0,fieldId)
                    .mapTo<Field>().list()[0]
        }

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM FIELD WHERE id = ?  ")
                    .bind(0, fieldId)
                    .execute()
        }

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM COMPOUND WHERE id = ?  ")
                    .bind(0, compound.id)
                    .execute()
        }

    }

    override fun deleteFieldFromCompound(compoundId: Int,fieldId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM FIELD WHERE id = ? AND compoundId = ? ")
                    .bind(0, fieldId)
                    .bind(1,compoundId)
                    .execute()
        }

    }

    /*TODO add pictures*/
    override fun getAllFields(compoundId : Int): List<Field>? {
        val toReturn = jdbi.withHandle<List<Field>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select name, id " +
                    "from FIELD " +
                    "WHERE compoundId = ? AND accepted = ?")
                    .bind(0,compoundId)
                    .bind(1,true)
                    .mapTo<Field>()
                    .list()
        }

        return toReturn
    }

    /*TODO add pictures*/
    override fun getFieldInfo(fieldId: Int): Optional<Field>? {
        val toReturn = jdbi.withHandle<Optional<Field>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select name " +
                    "from FIELD " +
                    "WHERE id = ? AND accepted = ?")
                    .bind(0,fieldId)
                    .bind(1,true)
                    .mapTo<Field>()
                    .findOne()
        }
        return toReturn
    }

    override fun acceptField(compoundId: Int, fieldId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" UPDATE FIELD " +
                "SET accepted = ?" +
                "WHERE id = ? AND compoundId = ?")
                .bind(0, true)
                .bind(1,fieldId)
                .bind(2,compoundId)
                .execute()
        }
    }


}