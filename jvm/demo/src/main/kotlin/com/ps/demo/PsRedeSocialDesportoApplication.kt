package com.ps.demo

import org.jdbi.v3.core.Jdbi
import org.jdbi.v3.postgres.PostgresPlugin
import org.jdbi.v3.sqlobject.SqlObjectPlugin
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import javax.sql.DataSource

@SpringBootApplication
internal class JdbiConfiguration {
	var password = System.getenv("PostgresPassword")
	@Bean
	fun jdbi(datasource: DataSource?): Jdbi {
		return Jdbi.create(datasource)
				.installPlugin(PostgresPlugin())
				.installPlugin(SqlObjectPlugin())

	}
}


@SpringBootApplication
class PsRedeSocialDesportoApplication

fun main(args: Array<String>) {
	runApplication<PsRedeSocialDesportoApplication>(*args)
}
