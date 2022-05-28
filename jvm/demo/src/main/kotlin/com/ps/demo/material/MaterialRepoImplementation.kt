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
}