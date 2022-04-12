import { BaseController } from './base-controller';
import { User } from '../interfaces/users.interface';
import { UsersRepository } from '../repository/users-repository.interface';

export default class UsersController extends BaseController<User> {
	constructor(private productsRepository: UsersRepository) {
		super(productsRepository);
	}

	findUserByFirstName(name: string): User {
		return this.productsRepository.findUserByFirstName(name);
	}
}
