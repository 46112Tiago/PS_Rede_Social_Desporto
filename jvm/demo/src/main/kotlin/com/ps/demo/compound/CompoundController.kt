package com.ps.demo.compound

import com.ps.data.Compound
import org.postgresql.geometric.PGpoint
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.*
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/compound")
@CrossOrigin("http://localhost:3000")
class CompoundController(val compoundService: CompoundService) {


    /******************************************  GET  ******************************************/

/*
    Get only the Compounds and fields inside a certain area defined by the zoom, latitude and longitude 
*/

    @GetMapping("/location")
    fun getLocations(@RequestParam(required = true) zoom: Int,
                     @RequestParam(required = false) centerLat : Double,
                     @RequestParam(required = false) centerLng : Double)
    : ResponseEntity<List<Compound?>?> {
        val locations : List<Compound?>? = compoundService.getCompoundLocations(zoom,centerLat,centerLng)
        return ResponseEntity(locations, OK)
    }

/*
    Get only the Compounds and fields inside a certain area defined by the zoom, latitude, longitude and the sport 
*/

    @GetMapping("/sport/{sportId}")
    fun getLocationsBySport(@PathVariable("sportId") sportId : Int,
                            @RequestParam(required = true) zoom: Int? = 0,
                            @RequestParam(required = false) centerLat : Double? = 0.0,
                            @RequestParam(required = false) centerLng : Double? = 0.0) : ResponseEntity<List<Compound?>?> {
        val locations : List<Compound?>? = compoundService.getLocationsBySport(sportId,zoom,centerLat,centerLng)
        return ResponseEntity(locations, OK)
    }


/*
    Get the information about a certain compound 
*/

    @GetMapping("/{compoundId}")
    fun getCompoundInfo(@PathVariable("compoundId") compoundId : Int) : ResponseEntity<Any> {
        val compound : Optional<Compound> = compoundService.getCompoundInformation(compoundId)
        if (compound.isEmpty) return ResponseEntity("Resource not found",NOT_FOUND)
        return ResponseEntity(compound, OK)
    }

    /******************************************  DELETE  ******************************************/

/*
    Remove a certain compound 
*/

    @DeleteMapping("/{compoundId}")
    fun deleteCompound(@PathVariable("compoundId") compoundId : Int) : ResponseEntity<Any> {
        compoundService.deleteCompound(compoundId)
        return ResponseEntity("Compound $compoundId deleted", OK)
    }

    /******************************************  POST  ******************************************/
    
/*
    Create a new compound 
*/

    @PostMapping
    fun createCompound(@RequestBody compound : Compound)
            : ResponseEntity<Any> {
        val compoundKey = compoundService.createCompound(compound)
        if (compoundKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(compoundKey, OK)
    }

    /******************************************  PUT  ******************************************/

/*
    Accept a compound. The user can only see compounds that have been accepted 
*/

    @PutMapping("/{compoundId}")
    fun acceptCompound(@PathVariable compoundId : Int)
            : ResponseEntity<Any?> {
        compoundService.acceptCompound(compoundId)
        return ResponseEntity("Compound $compoundId accepted", OK)
    }

}