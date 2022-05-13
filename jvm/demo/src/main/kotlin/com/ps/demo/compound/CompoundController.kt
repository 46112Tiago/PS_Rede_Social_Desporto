package com.ps.demo.compound

import com.ps.data.Compound
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/compound")
class CompoundController(val compoundRepo : CompoundRepoImplementation) {

    @GetMapping("/location")
    fun getLocations() : ResponseEntity<List<Compound>?> {
        val locations : List<Compound>? = compoundRepo.getCompoundLocations()
        return ResponseEntity(locations, HttpStatus.OK)
    }

    @GetMapping("/{compoundId}")
    fun getCompoundInfo(@PathVariable("compoundId") compoundId : Int) : ResponseEntity<Compound?> {
        val compound : Compound = compoundRepo.getCompoundInformation(compoundId)
                ?: return ResponseEntity(HttpStatus.NOT_FOUND)

        return ResponseEntity(compound, HttpStatus.OK)
    }

    @DeleteMapping("/{compoundId}")
    fun deleteCompound(@PathVariable("compoundId") compoundId : Int) : ResponseEntity<Any?> {
        compoundRepo.deleteCompound(compoundId)
        val responseHeaders = HttpHeaders()
        responseHeaders.set("Access-Control-Allow-Origin","*")
        return ResponseEntity.ok().headers(responseHeaders).body(1)
    }

    //TODO:Add capability to add schedule and materials
    @CrossOrigin("http://localhost:3000")
    @PostMapping
    fun createCompound(@RequestBody compound : Compound)
            : ResponseEntity<Any?> {
        val compoundKey = compoundRepo.createCompound(compound)
        return ResponseEntity(compoundKey, HttpStatus.OK)
    }

    @PutMapping("/{compoundId}")
    fun acceptField(@PathVariable compoundId : Int)
            : ResponseEntity<Any?> {
        compoundRepo.acceptCompound(compoundId)
        return ResponseEntity(HttpStatus.OK)
    }

}