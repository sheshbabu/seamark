# Seamark

Web performance dashboard

![Screenshot](./docs/screenshot.jpg)

## Local development

Prerequisites:

- Install `docker` and `docker-compose`

Start the containers

```shell
$ docker-compose up -d
```

SSH into the `seamark` container and run migrations

```shell
$ npm run migrate
```
