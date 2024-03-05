import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  // ParseIntPipe,
} from '@nestjs/common';
// import { Product } from 'src/entities/product.entity';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Get('/filter')
  getProductsFilter(@Query() params: PaginateParams) {
    const { limit, offset } = params;
    return {
      message: `Product ${limit} & ${offset}`,
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('productId', ParseIntPipe) productId: string) {
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return id;
  }
}
