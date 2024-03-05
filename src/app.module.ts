import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './products/controllers/categories.controller';
import { ProductsService } from './products/services/products.service';
import { BrandsController } from './products/controllers/brands.controller';
import { CustomerController } from './users/controller/customer.controller';
import { UsersController } from './users/controller/user.controller';
import { CategoriesService } from './products/services/category.service';
import { UsersService } from './users/services/user.service';
import { BrandsService } from './products/services/brand.service';
import { CustomersService } from './users/services/customer.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
