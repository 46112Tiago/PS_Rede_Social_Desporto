package com.ps.demo.field

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class FieldController(val fieldRepo : FieldRepoImplementation) {

}