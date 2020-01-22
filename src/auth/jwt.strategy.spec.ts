import { Test, TestingModule } from '@nestjs/testing';

import { JwtStrategy } from './jwt.strategy';

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtStrategy],
    }).compile();

    jwtStrategy = module.get<JwtStrategy>(JwtStrategy);
  });

  describe('validate', () => {
    it('should return the payload for complete authorization scopes', () => {
      const mockPayload = {
        scope: 'email openid profile',
      };

      expect(jwtStrategy.validate(mockPayload)).toBe(mockPayload);
    });

    it('should throw UnauthorizedException for incomplete authorization scopes', () => {
      const mockPayload = {
        scope: 'email madeupscope anothermadeupscope afourthmadeupscope',
      };

      expect(() => jwtStrategy.validate(mockPayload)).toThrow();
    });
  });
});
