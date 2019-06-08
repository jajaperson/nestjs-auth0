import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  imports: [passportModule],
  providers: [JwtStrategy],
  exports: [passportModule, JwtStrategy],
})
export class AuthModule {}
