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
  <a href="https://dependabot.com">
    <img src="https://api.dependabot.com/badges/status?host=github&repo=jajaperson/nestjs-auth0" />
  </a>
</p>

## Description

A template for using [Auth0](https://auth0.com) with the
[Nest](https://github.com/nestjs/nest) framework. To start, either fork this
repository or run

```bash
$ git clone --depth 1 https://github.com/jajaperson/nestjs-auth0.git
```

## Setup

You'll need to populate a `.env` file with Auth0 configuration environemt
details. This file should **never** be committed for obvious reasons (hence the
reason it's `.gitignore`-d).

```dotenv
AUTH0_DOMAIN={your Auth0 domain}
AUTH0_CLIENT_ID={the Auth0 client ID for your app}
AUTH0_CLIENT_SECRET={the Auth0 client secret for your app}
AUTH0_AUDIENCE={http://localhost:3000 or your production domain accordingly}
```

A template `.env` file can be found at [`.env.example`](.env.example).

You may also like to remove all the irrelevant metadata from the `package.json`,
suck as the `repository`, `homepage`, `bugs`, and `description` fields.

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

## Explanation

### Authentication logic

This template nest app uses the [jwks-rsa](https://ghub.io/jwks-rsa) package
along with [passport-jwt](https://ghub.io/passport-jwt) and
[@nestjs/passport](https://ghub.io/@nestjs/passport) for authentication. All
authentication logic is in the [`/src/auth/`](src/auth/) submodule.

```
src/auth/
├── auth.module.ts
├── interfaces
│   └── jwt-payload.interface.ts
├── jwt.strategy.spec.ts
└── jwt.strategy.ts
```

The [`JwtStrategy`](src/auth/jwt.strategy.ts) injectable contains all the core
functionality, where the constructor sets up core token validation using the
[jwks-rsa](https://ghub.io/jwks) library. All the Auth0 configuration for this
is done in the [`.env`](.env.example) file using
[@nestjs/config](https://ghub.io/@nestjs/config) (see [above](#Setup)). On any
request with authentication, the decoded JSON web token (which should follow
[`JwtPayload`](src/auth/interfaces/jwt-payload.interface.ts)) is passed to the
`validate`, which checks the token for the required scopes.

The [`AuthModule`](src/auth/auth.module.ts) itself exports both `PassportModule`
and the `JwtStrategy` injectable, and registers `JwtStrategy` as default.

`AuthModule` is imported by [`AppModule`](src/app.module.ts), and protected
routes are decorated with `@UseGuards(AuthGuard())` in
[`AppController`](src/app.controller.ts).

## More info

See the [Nest documentation](https://docs.nestjs.com).

## License

This project is [MIT licensed](LICENSE).
