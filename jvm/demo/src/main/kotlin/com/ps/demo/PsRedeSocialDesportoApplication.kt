package com.ps.demo


import org.jdbi.v3.core.Handle
import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinPlugin
import org.jdbi.v3.postgres.PostgresPlugin
import org.jdbi.v3.sqlobject.kotlin.KotlinSqlObjectPlugin
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import java.util.*
import java.lang.Object.*
import org.jdbi.v3.*
import org.jdbi.v3.core.kotlin.useHandleUnchecked
import org.springframework.web.servlet.config.annotation.CorsRegistry

import org.springframework.web.servlet.config.annotation.WebMvcConfigurer




@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
	runApplication<DemoApplication>(*args)



}

@Bean
fun corsConfigurer(): WebMvcConfigurer? {
	return object : WebMvcConfigurer {
		override fun addCorsMappings(registry: CorsRegistry) {
			registry.addMapping("/**").allowCredentials(true).allowedOrigins("*").allowedMethods("*")
		}
	}
}

@SpringBootApplication
class JdbiConfig() {

	@Bean
	fun jdbi(): Jdbi? {
		var jdbi : Jdbi? = null
		val password = System.getenv("PostgresPassword")
		try{
			jdbi = Jdbi.create("jdbc:postgresql://localhost:5432/postgres","postgres",password)
				.installPlugins()
				.installPlugin(PostgresPlugin())
				.installPlugin(KotlinPlugin())
				.installPlugin(KotlinSqlObjectPlugin())
		} catch (e : Exception) {e.printStackTrace()}


		return jdbi
	}
}

