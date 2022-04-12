import { BaseRepository } from './base-repository.interface';
import { User } from '../interfaces/users.interface';

export interface UsersRepository extends BaseRepository<User> {
	findUserByFirstName(name: string): User;
}
