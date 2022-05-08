package com.ps.resourceServer

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator
import org.springframework.security.oauth2.core.OAuth2TokenValidator
import org.springframework.security.oauth2.jwt.*


import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.oauth2.jwt.JwtTimestampValidator

import org.springframework.security.oauth2.jwt.JwtValidators

import org.springframework.security.oauth2.jwt.ReactiveJwtDecoders

import org.springframework.security.oauth2.jwt.NimbusReactiveJwtDecoder

import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder





@EnableWebSecurity
class SecurityConfig () {

    @Value("\${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
    private val issuer: String? = null

    @Value("\${auth0.audience}")
    private val audience: String? = null

    @Bean
    fun securityWebFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain? {
        /*
        This is where we configure the security required for our endpoints and setup our app to serve as
        an OAuth2 Resource Server, using JWT validation.
        */
        return http
                .authorizeExchange()
                .pathMatchers("/user").authenticated()
                .and().cors()
                .and().oauth2ResourceServer()
                .jwt().and().and().build()
    }


    @Bean
    fun jwtDecoder(): ReactiveJwtDecoder? {
        /*
        By default, Spring Security does not validate the "aud" claim of the token, to ensure that this token is
        indeed intended for our app. Adding our own validator is easy to do:
        */
        val jwtDecoder = ReactiveJwtDecoders.fromOidcIssuerLocation(issuer) as NimbusReactiveJwtDecoder
        val audienceValidator: OAuth2TokenValidator<Jwt> = AudienceValidator(audience!!)
        val withIssuer = JwtValidators.createDefaultWithIssuer(issuer)
        val withAudience: OAuth2TokenValidator<Jwt> = DelegatingOAuth2TokenValidator(withIssuer, audienceValidator,
                JwtTimestampValidator())
        jwtDecoder.setJwtValidator(withAudience)
        return jwtDecoder
    }

}