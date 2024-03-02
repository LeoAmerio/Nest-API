import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandsController } from './controllers/brands.controller';
import { CustomerController } from './controllers/customer.controller';
import { UsersController } from './controllers/user.controller';
import { CategoriesService } from './services/category.service';
import { UsersService } from './services/user.service';
import { BrandsService } from './services/brand.service';
import { CustomersService } from './services/customer.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    CustomerController,
    UsersController
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    UsersService,
    BrandsService,
    CustomersService
  ]
})
export class AppModule {}
