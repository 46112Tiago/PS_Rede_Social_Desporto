package com.ps.demo.compound

import com.ps.data.Compound
import org.antlr.v4.runtime.misc.Pair
import java.net.URL

interface CompoundService {

    fun createCompound(compound : Compound) : Int?

    fun deleteCompound(compoundId : Int)

    fun getCompoundLocations() : List<Compound>?

    fun getCompoundInformation(compoundId : Int) : Compound?

    fun acceptCompound(compoundId: Int)

}