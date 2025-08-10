import { UserRepository } from "@/repositories";
import { toUserDto } from "@/mappers";
import type { CreateUserDtoType, UpdateUserDtoType } from "@/dtos";

export class UserService {
	private repository: UserRepository;
	constructor() {
		this.repository = new UserRepository();
	}
	getUser(id: string) {
		const user = this.repository.getUserById(id);
		if (!user) return null;
		return toUserDto(user);
	}
	getUsers() {
		const users = this.repository.getUsers();
		if (!users) return null;
		return users.map((user) => toUserDto(user));
	}
	createUser(dto: CreateUserDtoType) {
		const user = this.repository.createUser(dto);
		if (!user) return null;
		return toUserDto(user);
	}
	updateUser(dto: UpdateUserDtoType) {
		const user = this.repository.updateUser(dto);
		if (!user) return null;
		return toUserDto(user);
	}
}
