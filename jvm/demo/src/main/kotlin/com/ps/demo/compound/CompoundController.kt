package com.ps.demo.compound

import com.ps.data.Compound
import org.postgresql.geometric.PGpoint
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/compound")
@CrossOrigin("http://localhost:3000")
class CompoundController(val compoundService: CompoundService) {

    @GetMapping("/location")
    fun getLocations(@RequestParam(required = true) zoom: Int? = 0,
                     @RequestParam(required = false) centerLat : Double? = 0.0,
                     @RequestParam(required = false) centerLng : Double? = 0.0) : ResponseEntity<List<Compound?>?> {
        val locations : List<Compound?>? = compoundService.getCompoundLocations(zoom!!,centerLat!!,centerLng!!)
        return ResponseEntity(locations, HttpStatus.OK)
    }

    @GetMapping("/sport/{sportId}")
    fun getLocationsBySport(@PathVariable("sportId") sportId : Int,
                            @RequestParam(required = true) zoom: Int? = 0,
                            @RequestParam(required = false) centerLat : Double? = 0.0,
                            @RequestParam(required = false) centerLng : Double? = 0.0) : ResponseEntity<List<Compound?>?> {
        val locations : List<Compound?>? = compoundService.getLocationsBySport(sportId,zoom,centerLat,centerLng)
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

    @PostMapping
    fun createCompound(@RequestBody compound : Compound)
            : ResponseEntity<Int?> {
        val compoundKey = compoundService.createCompound(compound)
        if (compoundKey == -1) return ResponseEntity(BAD_REQUEST)
        return ResponseEntity(compoundKey, HttpStatus.OK)
    }

    @PutMapping("/{compoundId}")
    fun acceptCompound(@PathVariable compoundId : Int)
            : ResponseEntity<Any?> {
        compoundService.acceptCompound(compoundId)
        return ResponseEntity(HttpStatus.OK)
    }

}