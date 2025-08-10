import type { CreateUserDtoType, UpdateUserDtoType } from "@/dtos";
import type { User } from "@/entities";

// Hardcoded value for simple-testing
const USERS = [
	{
		id: "1",
		name: "John Doe",
		email: "johndoe@mail.com",
		password: "johndoepassword",
	},
	{
		id: "2",
		name: "Jane Doe",
		email: "janedoe@mail.com",
		password: "janedoepassword",
	},
	{
		id: "3",
		name: "Bob Doe",
		email: "bobdoe@mail.com",
		password: "bobdoepassword",
	},
	{
		id: "4",
		name: "Rob Doe",
		email: "robdoe@mail.com",
		password: "robdoepassword",
	},
];

export class UserRepository {
	getUserById(id: string): User | null {
		const user = USERS.find((_user) => _user.id === id);
		return user ?? null;
	}
	getUsers(): User[] | null {
		return USERS;
	}
	createUser(dto: CreateUserDtoType): User | null {
		return {
			id: Math.random().toString(),
			name: dto.name,
			email: dto.email,
			password: dto.password,
		};
	}
	updateUser(dto: UpdateUserDtoType): User | null {
		const user = USERS.find((_user) => _user.id === dto.id);
		if (!user) return null;
		const updatedUser = { ...user, ...dto };
		return updatedUser;
	}
}
