import { Module, Global } from '@nestjs/common';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.API_KEY === 'prod' ? API_KEY_PROD : API_KEY
    },
  ],
  exports: ['API_KEY']
})
export class DatabaseModule {}
