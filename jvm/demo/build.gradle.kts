import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.5.12"
	id("io.spring.dependency-management") version "1.0.9.RELEASE"
	kotlin("jvm") version "1.6.10"
	kotlin("plugin.spring") version "1.6.10"
}

group = "com.ps"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation ("org.springframework.boot:spring-boot-starter-oauth2-resource-server")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	implementation("org.jdbi:jdbi:2.77")
	implementation("org.jdbi:jdbi3-spring4:3.9.1")
	implementation("org.jdbi:jdbi3-sqlobject:3.9.1")
	implementation("org.jdbi:jdbi3-postgres:3.9.1")
	implementation("org.jdbi:jdbi3-kotlin-sqlobject:3.2.1")
	implementation("org.postgresql:postgresql:42.2.16")
	implementation("org.springframework.boot:spring-boot-starter-websocket")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "11"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}