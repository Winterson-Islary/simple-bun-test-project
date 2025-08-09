import { describe, it, expect } from "bun:test"
import { UserController } from "@/controllers"

describe("UserController", () => {
	describe("getUserHandler", () => {
		it("should return user without password field", () => {
			const controller = new UserController();
			const response = controller.getUserHandler("1");
			expect(response.success).toBe(true)

			if(response.success) {
				expect(response.data).toHaveProperty("name");
				expect(response.data).toHaveProperty("email");
				expect(response.data).not.toHaveProperty("password");
			}
		})
	})
})