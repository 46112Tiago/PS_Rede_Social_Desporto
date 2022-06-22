package com.ps.demo


import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.core.kotlin.KotlinPlugin
import org.jdbi.v3.postgres.PostgresPlugin
import org.jdbi.v3.sqlobject.kotlin.KotlinSqlObjectPlugin
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class DemoApplication {


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

fun main(args: Array<String>) {
	runApplication<DemoApplication>(*args)
}

