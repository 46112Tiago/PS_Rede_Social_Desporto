package com.ps.demo.comment

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class CommentController(val commentRepo : CommentRepoImplementation) {

}