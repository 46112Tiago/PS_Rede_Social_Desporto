package com.ps.demo.review

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class ReviewController(val reviewRepo : ReviewRepoImplementation) {

}