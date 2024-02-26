/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get()
  getProducts(@Query() params: PaginateParams): string {
    const { limit, offset } = params;
    return `Product ${limit} & ${offset}`;
  }

  @Get('/filter')
  getProductsFilter(@Query() params: PaginateParams) {
    const { limit, offset } = params;
    return {
      message: `Product ${limit} & ${offset}`
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('productId') productId: string) {
    return {
      message: `Product ${productId}`
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create action',
      payload
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload
    };
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return id;
  }

}
