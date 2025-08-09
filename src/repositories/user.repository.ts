import type { User } from "@/entities"

// Hardcoded value for simple-testing
export class UserRepository {
	getUserById(id: string): User | null {
		return {
			id,
			name: "John Doe",
			email: "johndoe@mail.com",
			password: "somethingIsSomethingElse"
		}
	}
}