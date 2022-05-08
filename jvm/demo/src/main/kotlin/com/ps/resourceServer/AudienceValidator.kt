package com.ps.resourceServer

import org.springframework.security.oauth2.core.OAuth2Error
import org.springframework.security.oauth2.core.OAuth2TokenValidator
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult
import org.springframework.security.oauth2.jwt.Jwt


/**
 * Validates that the JWT token contains the intended audience in its claims.
 */
internal class AudienceValidator(private val audience: String) : OAuth2TokenValidator<Jwt> {
    var error = OAuth2Error("invalid_token", "The required audience is missing", null)
    override fun validate(jwt: Jwt): OAuth2TokenValidatorResult {
        return if (jwt.audience.contains(audience)) {
            OAuth2TokenValidatorResult.success()
        } else OAuth2TokenValidatorResult.failure(error)
    }
}