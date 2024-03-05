import { Module } from '@nestjs/common';
import { UsersController } from './controller/user.controller';
import { UsersService } from './services/user.service';
import { CustomersService } from './services/customer.service';
import { CustomerController } from './controller/customer.controller';

@Module({
  controllers: [UsersController, CustomerController],
  providers: [UsersService, CustomersService],
})
export class UsersModule {}
