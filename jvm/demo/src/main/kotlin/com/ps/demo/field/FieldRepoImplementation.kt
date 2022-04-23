package com.ps.demo.field

import com.ps.data.Comment
import com.ps.data.Compound
import com.ps.data.Event
import com.ps.data.Field
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class FieldRepoImplementation(val jdbi : Jdbi) : FieldService{

    override fun createField(compound : Compound, field: Field): Int? {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "compound(name,location,parking,pictures,accepted) " +
                    "values(?,?,?,?,?)")
                    .bind(0,compound.name)
                    .bind(1,compound.location)
                    .bind(2,compound.parking)
                    .bind(3,compound.pictures)
                    .bind(4,false)
                    .execute()
        }

        val compoundId = jdbi.withHandle<Compound?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select id from COMPOUND order by id desc").mapTo<Compound>().one()
        }

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate("insert into " +
                    "field(compoundId,name,pictures,accepted) " +
                    "values(?,?,?,?)")
                    .bind(0,compoundId)
                    .bind(1,field.name)
                    .bind(2,field.pictures)
                    .bind(3,false)
                    .execute()
        }

        val toReturn = jdbi.withHandle<Field?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select id from FIELD order by id desc").mapTo<Field>().one()
        }

        return toReturn.id
    }

    override fun deleteField(compoundId: Int,fieldId: Int) {
        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM FIELD WHERE id = ?  ")
                    .bind(0, fieldId)
                    .execute()
        }

        jdbi.useHandle<RuntimeException> { handle: Handle ->
            handle.createUpdate(" DELETE FROM COMPOUND WHERE id = ?  ")
                    .bind(0, compoundId)
                    .execute()
        }

    }

    override fun getAllFields(compoundId : Int): List<Field>? {
        val toReturn = jdbi.withHandle<List<Field>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select name, pictures " +
                    "from FIELD " +
                    "WHERE compoundId = ? AND accepted = ?")
                    .bind(0,compoundId)
                    .bind(1,true)
                    .mapTo<Field>()
                    .list()
        }

        return toReturn
    }

    override fun getFieldInfo(fieldId: Int): Field? {
        val toReturn = jdbi.withHandle<Field?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select name, pictures " +
                    "from FIELD " +
                    "WHERE id = ? AND accepted = ?")
                    .bind(0,fieldId)
                    .bind(1,true)
                    .mapTo<Field>()
                    .one()
        }
        return toReturn
    }


}