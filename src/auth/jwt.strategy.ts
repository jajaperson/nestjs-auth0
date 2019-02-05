import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import { xor } from 'lodash';
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
      audience: 'http://localhost:3000',
      issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    });
  }

  validate(payload: JwtPayload) {
    if (
      xor(payload.scope.split(' '), ['openid', 'profile', 'email']).length > 0
    ) {
      throw new UnauthorizedException(
        'JWT does not possess the requires scope (`openid profile email`).',
      );
    }
  }
}
