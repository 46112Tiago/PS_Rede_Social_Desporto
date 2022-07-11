FROM gradle AS build
COPY --chown=gradle:gradle . /app
WORKDIR /app
RUN gradle build --no-daemon

FROM openjdk:11-jre-slim

RUN mkdir /app

COPY --from=build /app/build/libs/ /app/

ENTRYPOINT ["java","-jar","/app/OfficeManagementAPI-0.0.1-SNAPSHOT.jar"]