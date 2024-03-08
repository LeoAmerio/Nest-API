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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getProducts() {
    return this.productsService.findAll();
  }

  @Get('/filter')
  @ApiOperation({ summary: 'List of products with filters' })
  getProductsFilter(@Query() params: PaginateParams) {
    const { limit, offset } = params;
    return {
      message: `Product ${limit} & ${offset}`,
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get a product' })
  getProduct(@Param('productId', ParseIntPipe) productId: string) {
    return this.productsService.findOne(+productId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  create(@Body() payload: CreateProductDto) {
    this.productsService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product' })
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  remove(@Param('id') id: number) {
    return id;
  }
}
