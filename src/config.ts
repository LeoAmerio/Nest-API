import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      host: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
      // port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
    apiKey: process.env.API_KEY,
  };
});
