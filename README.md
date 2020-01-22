<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center"><a href="https://nestjs.com">NestJS</a> + <a href="https://auth0.com">Auth0</a> = :heart:</p>

<p align="center">
  <a href="https://github.com/jajaperson/nestjs-auth0/releases">
    <img src="https://img.shields.io/github/v/tag/jajaperson/nestjs-auth0?label=version" />
  </a>
  <a href="https://github.com/jajaperson/nestjs-auth0/actions">
    <img src="https://github.com/jajaperson/nestjs-auth0/workflows/build/badge.svg" />
  </a>
  <a href="https://codecov.io/gh/jajaperson/nestjs-auth0">
    <img src="https://codecov.io/gh/jajaperson/nestjs-auth0/branch/master/graph/badge.svg" />
  </a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A template for using [Auth0](https://auth0.com) with the [Nest](https://github.com/nestjs/nest) framework. To start, either fork this repository or run

```bash
$ git clone --depth 1 https://github.com/jajaperson/nestjs-auth0.git
```

## Setup

You'll need to populate a `.env` file with Auth0 configuration environemt details. This file should **never** be committed for obvious reasons (hence the reason it's `.gitignore`-d).

```dotenv
AUTH0_DOMAIN={your Auth0 domain}
AUTH0_CLIENT_ID={the Auth0 client ID for your app}
AUTH0_CLIENT_SECRET={the Auth0 client secret for your app}
AUTH0_AUDIENCE={http://localhost:3000 or your production domain accordingly}
```

A template `.env` file can be found at [`.env.example`](.env.example).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## More info

See the [Nest documentation](https://docs.nestjs.com).

## License

This project is [MIT licensed](LICENSE).
