package com.ps.demo.material

import com.ps.data.Material
import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.mapTo
import org.springframework.stereotype.Repository

@Repository
class MaterialRepoImplementation (var jdbi: Jdbi) {

    fun getMaterials(): List<Material>? {
        val toReturn = jdbi.withHandle<List<Material>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select id, name from MATERIALS")
                .mapTo<Material>().list()
        }
        return toReturn
    }

    fun getCompoundMaterials(compoundId: Int ): List<Material>? {
        val toReturn = jdbi.withHandle<List<Material>?,RuntimeException> { handle : Handle ->
            handle.createQuery("Select M.id, M.name " +
                    "from MATERIALS M JOIN MATERIAL_COMPOUND ON materialId = M.id " +
                    "JOIN COMPOUND C ON compoundId = C.id " +
                    "WHERE C.id = ?")
                .bind(0, compoundId)
                .mapTo<Material>().list()
        }
        return toReturn
    }
}