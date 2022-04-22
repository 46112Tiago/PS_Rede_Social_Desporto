package com.ps.demo.compound

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class CompoundController(val compoundRepo : CompoundRepoImplementation) {
}