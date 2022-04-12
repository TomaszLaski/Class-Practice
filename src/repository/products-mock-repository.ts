import { ProductsRepository } from './products-repository.interface';
import { Product } from '../interfaces/product.interface';
var shortid = require('shortid');

export class ProductsMockRepository implements ProductsRepository {
	private products: Array<Product> = [];

	addItem(item: Product): Product {
		item.id = shortid.generate();
		item.createdAt = new Date();
		item.updatedAt = new Date();
		this.products.push(item);
		return item;
	}

	updateItem(id: string, item: Product): Product {
		this.products = this.products.map((i) => {
			if (i.id === id) {
				return {
					...item,
					id: i.id,
					createdAt: i.createdAt,
					updatedAt: new Date(),
				};
			}

			return i;
		});

		return this.getItemById(id);
	}

	deleteItem(id: string): boolean {
		const deletedItem = this.getItemById(id);
		const index = this.products.indexOf(deletedItem);
		if (index > -1) {
			this.products.splice(index, 1);
			return true;
		}
	}

	getItemById(id: string): Product {
		let itemFound = this.products.find((item) => {
			if (item.id === id) return true;
		});
		return itemFound;
	}

	findProductByName(name: string): Product {
		let itemFound = this.products.find((item) => {
			if (item.name === name) return true;
		});
		return itemFound;
	}

	getAllItems(): Product[] {
		return this.products;
	}
}
