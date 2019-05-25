# Seamark

Web performance dashboard

![Screenshot](./docs/screenshot.png)

## Local development

Prerequisites:

- Install `docker` and `docker-compose`

Start the containers

```shell
$ docker-compose up -d
```

Run migrations in the `seamark` container

```shell
$ docker-compose run seamark npm run migrate
```
