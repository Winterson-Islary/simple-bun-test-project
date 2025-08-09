import type { UserDtoType } from "@/dtos";
import type { User } from "@/entities";

export const toUserDto = (user: User): UserDtoType => {
	return {
		id: user.id,
		name: user.name,
		email: user.email
	}
} 