import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [{
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 123,
    stock: 12,
    image: ''
  }];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const productFound = this.products.findIndex((item) => item.id === id);
    let message = '';
    if (productFound > 0) {
      this.products.splice(productFound, 1);
      message = 'product deleted';
    } else {
      message = 'product not found';
    }
    return message;
  }
}
