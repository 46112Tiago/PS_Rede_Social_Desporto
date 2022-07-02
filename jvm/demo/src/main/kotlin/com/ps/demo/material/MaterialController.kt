package com.ps.demo.material

import com.ps.data.Material
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/material")
@CrossOrigin("http://localhost:3000")
class MaterialController(val materialService: MaterialService) {

    /******************************************  GET  ******************************************/

    /* 
        Get all the materials as suggestions for a compound
    */

    @GetMapping
    fun getMaterials(): ResponseEntity<List<Material>?> {
        val materials = materialService.getMaterials()
        return ResponseEntity(materials, HttpStatus.OK)
    }

    /* 
        Get all the materials available for renting in a compound
    */

    @GetMapping("/compound/{compoundId}")
    fun getCompoundMaterials(@PathVariable("compoundId") compoundId: Int): ResponseEntity<List<Material>?> {
        val materials = materialService.getCompoundMaterials(compoundId)
        return ResponseEntity(materials, HttpStatus.OK)
    }
}