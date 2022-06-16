package com.ps.demo.resourceServer

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.security.oauth2.jwt.JwtValidators;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;

@EnableWebSecurity
class SecurityConfig :  WebSecurityConfigurerAdapter() {

    @Value("\${auth0.audience}")
    private val audience: String? = null

    @Value("\${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
    private val issuer: String? = null

    @Bean
    fun jwtDecoder(): JwtDecoder? {
        val jwtDecoder: NimbusJwtDecoder = JwtDecoders.fromOidcIssuerLocation(issuer) as NimbusJwtDecoder
        val audienceValidator: OAuth2TokenValidator<Jwt> = AudienceValidator(audience!!)
        val withIssuer: OAuth2TokenValidator<Jwt> = JwtValidators.createDefaultWithIssuer(issuer)
        val withAudience: OAuth2TokenValidator<Jwt> = DelegatingOAuth2TokenValidator(withIssuer, audienceValidator)
        jwtDecoder.setJwtValidator(withAudience)
        return jwtDecoder
    }

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http.authorizeRequests()
            .mvcMatchers(HttpMethod.GET,"/event").permitAll()
            .mvcMatchers(HttpMethod.GET,"/event/{eventId}").permitAll()
            .mvcMatchers(HttpMethod.GET,"/material/compound/{compoundId}").permitAll()
            .mvcMatchers(HttpMethod.GET,"/schedule/compound/{compoundId}").permitAll()
            .mvcMatchers(HttpMethod.GET,"/compound/location").permitAll()
            .mvcMatchers(HttpMethod.GET,"/compound/sport/{sportId}").permitAll()
            .mvcMatchers(HttpMethod.GET,"/compound/{compoundId}/field").permitAll()
            .mvcMatchers(HttpMethod.GET,"/compound/{compoundId}/review").permitAll()
            .mvcMatchers(HttpMethod.GET,"/compound/{compoundId}").permitAll()
            .anyRequest().authenticated()
            .and().cors()
            .and().oauth2ResourceServer().jwt()
    }

}