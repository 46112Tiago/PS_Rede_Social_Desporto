package com.ps.demo.compound

import org.jdbi.v3.core.Jdbi
import org.springframework.stereotype.Repository

@Repository
class CompoundRepoImplementation(val jdbi: Jdbi) {
}