import { Roles } from '../enums/roles.enum';

interface UserAddress {
	country: string;
	city: string;
	street: string;
	streetNumber: number;
	flatNumber?: number;
}

export interface User {
	id: string;
	name: string;
	email: string;
	birthDate: Date | string;
	address: Array<UserAddress>;
	type: Roles;
}
