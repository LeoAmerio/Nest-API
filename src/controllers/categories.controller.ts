/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class CategoriesController {
  @Get(':categoryId/product/:productId')
  getCategory(@Param('productId') productId: string, @Param('categoryId') categoryId: string) {
    return `Product ${productId} & ${categoryId}`;
  }
}
