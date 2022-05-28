package com.ps.demo.material

import com.ps.data.Material
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/material")
@CrossOrigin("https://localhost:3000")
class MaterialController(val materialService: MaterialService) {

    @GetMapping
    fun getMaterials(): ResponseEntity<List<Material>?> {
        val materials = materialService.getMaterials()
        return ResponseEntity(materials, HttpStatus.OK)
    }
}