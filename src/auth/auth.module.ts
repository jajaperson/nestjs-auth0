import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import authConfig from '../config/auth.config';

import { JwtStrategy } from './jwt.strategy';

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  imports: [ConfigModule.forFeature(authConfig), passportModule],
  providers: [JwtStrategy],
  exports: [passportModule, JwtStrategy],
})
export class AuthModule {}
