import { User } from '../interfaces/users.interface';
import { UsersRepository } from './users-repository.interface';
var shortid = require('shortid');

export class UserMockRepository implements UsersRepository {
	private users: Array<User> = [];

	addItem(item: User): User {
		item.id = shortid.generate();
		this.users.push(item);
		return item;
	}

	updateItem(id: string, user: User): User {
		this.users = this.users.map((i) => {
			if (i.id === id) {
				return {
					...user,
					id: i.id,
					updatedAt: new Date(),
					name: i.name,
					email: i.email,
					birthDate: i.birthDate,
					address: i.address,
					type: i.type,
				};
			}

			return i;
		});

		return this.getItemById(id);
	}

	deleteItem(id: string): boolean {
		const deletedItem = this.getItemById(id);
		const index = this.users.indexOf(deletedItem);
		if (index > -1) {
			this.users.splice(index, 1);
			return true;
		}
	}

	getItemById(id: string): User {
		let itemFound = this.users.find((item) => {
			if (id === item.id) return true;
		});
		return itemFound;
	}

	findUserByFirstName(name: string): User {
		let itemFound = this.users.find((item) => {
			if (name === item.name) return true;
		});
		return itemFound;
	}

	getAllItems(): User[] {
		return this.users;
	}
}
