import { UserRepository } from "@/repositories"
import { toUserDto } from "@/mappers"

export class UserService {
	private repository: UserRepository
	constructor() {
		this.repository = new UserRepository()
	}
	getUser(id: string) {
		const user = this.repository.getUserById(id)
		if (!user) return null
		return toUserDto(user)
	}
}