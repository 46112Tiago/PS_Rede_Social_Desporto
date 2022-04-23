package com.ps.demo.compound

import com.ps.data.Compound
import com.ps.data.Review
import org.antlr.v4.runtime.misc.Pair
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/compound")
class CompoundController(val compoundRepo : CompoundRepoImplementation) {

    @GetMapping
    fun getLocations() : ResponseEntity<List<Pair<Float,Float>>?> {
        val locations : List<Pair<Float,Float>>? = compoundRepo.getCompoundLocations()
        return ResponseEntity(locations, HttpStatus.OK)
    }

    @GetMapping("/{compoundId}")
    fun getCompoundInfo(@PathVariable("compoundId") compoundId : Int) : ResponseEntity<Compound?> {
        val compound : Compound? = compoundRepo.getCompoundInformation(compoundId)
        return ResponseEntity(compound, HttpStatus.OK)
    }

    @DeleteMapping("/{compoundId}")
    fun deleteCompound(@PathVariable("compoundId") compoundId : Int) : ResponseEntity<Any?> {
        compoundRepo.deleteCompound(compoundId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping
    fun createCompound(@RequestBody compound : Compound)
            : ResponseEntity<Any?> {
        val compoundKey : Int? = compoundRepo.createCompound(compound)
        return ResponseEntity(compoundKey, HttpStatus.OK)
    }

}