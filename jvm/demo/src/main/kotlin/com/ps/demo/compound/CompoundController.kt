package com.ps.demo.compound

import com.ps.data.Compound
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/compound")
@CrossOrigin("http://localhost:3000")
class CompoundController(val compoundService: CompoundService) {

    @GetMapping("/location")
    fun getLocations() : ResponseEntity<List<Compound?>?> {
        val locations : List<Compound?>? = compoundService.getCompoundLocations()
        return ResponseEntity(locations, HttpStatus.OK)
    }

    @GetMapping("/{compoundId}")
    fun getCompoundInfo(@PathVariable("compoundId") compoundId : Int) : ResponseEntity<Compound?> {
        val compound : Compound = compoundService.getCompoundInformation(compoundId)
                ?: return ResponseEntity(HttpStatus.NOT_FOUND)

        return ResponseEntity(compound, HttpStatus.OK)
    }

    @DeleteMapping("/{compoundId}")
    fun deleteCompound(@PathVariable("compoundId") compoundId : Int) : ResponseEntity<Any?> {
        compoundService.deleteCompound(compoundId)
        val responseHeaders = HttpHeaders()
        responseHeaders.set("Access-Control-Allow-Origin","*")
        return ResponseEntity.ok().headers(responseHeaders).body(1)
    }

    //TODO:Add capability to add schedule and materials

    @PostMapping
    fun createCompound(@RequestBody compound : Compound)
            : ResponseEntity<Any?> {
        val compoundKey = compoundService.createCompound(compound)
        return ResponseEntity(compoundKey, HttpStatus.OK)
    }

    @PutMapping("/{compoundId}")
    fun acceptField(@PathVariable compoundId : Int)
            : ResponseEntity<Any?> {
        compoundService.acceptCompound(compoundId)
        return ResponseEntity(HttpStatus.OK)
    }

}