import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `https://${process.env.AUTH0_DOMAIN}`,
    });
  }

  validate(payload: JwtPayload): JwtPayload {
    const minimumScope = ['openid', 'profile', 'email'];

    if (
      payload.scope.split(' ').filter(scope => minimumScope.indexOf(scope) > -1)
        .length !== 3
    ) {
      throw new UnauthorizedException(
        'JWT does not possess the requires scope (`openid profile email`).',
      );
    }

    return payload;
  }
}
