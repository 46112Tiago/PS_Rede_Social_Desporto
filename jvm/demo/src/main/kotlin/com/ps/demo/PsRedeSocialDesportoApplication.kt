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

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
	runApplication<DemoApplication>(*args)



}

@SpringBootApplication
class JdbiConfig() {

	@Bean
	fun jdbi(): Jdbi? {
		var jdbi : Jdbi? = null
		val password = "postgres"
		try{
			jdbi = Jdbi.create("jdbc:postgresql://localhost:5432/postgres","postgres",password)
				.installPlugins()
				.installPlugin(PostgresPlugin())
				.installPlugin(KotlinPlugin())
				.installPlugin(KotlinSqlObjectPlugin())
		} catch (e : Exception) {e.printStackTrace()}

//		jdbi!!.useHandleUnchecked {
//				handle : Handle -> handle.execute("Create table test (id int primary key)")
//		}

		return jdbi
	}
}

