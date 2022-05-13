package com.ps.demo.resourceServer

import org.springframework.security.oauth2.core.OAuth2Error
import org.springframework.security.oauth2.core.OAuth2TokenValidator
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult
import org.springframework.security.oauth2.jwt.Jwt

internal class AudienceValidator(private val audience: String) : OAuth2TokenValidator<Jwt> {


    override fun validate(token: Jwt?): OAuth2TokenValidatorResult {
        val error = OAuth2Error("invalid_token", "The required audience is missing", null)
        return if (token!!.audience.contains(audience)) {
            OAuth2TokenValidatorResult.success()
        } else OAuth2TokenValidatorResult.failure(error)
    }
}