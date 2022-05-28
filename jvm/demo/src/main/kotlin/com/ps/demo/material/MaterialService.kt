package com.ps.demo.material

import com.ps.data.Material
import org.springframework.stereotype.Service

@Service
class MaterialService(val materialRepo: MaterialRepoImplementation) {

    fun getMaterials(): List<Material>? {
        return materialRepo.getMaterials()
    }

}