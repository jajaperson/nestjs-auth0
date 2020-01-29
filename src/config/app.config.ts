import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.PORT ?? 3000,
  host: process.env.HOST ?? 'localhost',
}));
