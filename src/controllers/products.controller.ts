import { BaseController } from './base-controller';
import { Product } from '../interfaces/product.interface';
import { ProductsRepository } from '../repository/products-repository.interface';

export default class ProductsController extends BaseController<Product> {
	constructor(private productsRepository: ProductsRepository) {
		super(productsRepository);
	}

	findProductByName(name: string): Product {
		return this.productsRepository.findProductByName(name);
	}
}
