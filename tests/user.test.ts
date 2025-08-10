import { beforeEach, describe, expect, it } from "bun:test";
import { UserController } from "@/controllers";
import { ReasonPhrases } from "http-status-codes";

describe("UserController", () => {
	describe("getUserHandler", () => {
		it("should return user without password field", () => {
			const controller = new UserController();
			const response = controller.getUserHandler("1");
			expect(response.success).toBe(true);

			if (response.success) {
				expect(response.data).toHaveProperty("name");
				expect(response.data).toHaveProperty("email");
				expect(response.data).not.toHaveProperty("password");
			}
		});
	});
});

describe("UserController", () => {
	let controller: UserController;

	beforeEach(() => {
		controller = new UserController();
	});

	it("returns user without password", () => {
		const res = controller.getUserHandler("1");
		expect(res.success).toBe(true);
		if (res.success) {
			expect(res.data).not.toHaveProperty("password");
		}
	});

	it("returns error for non-existent user", () => {
		const res = controller.getUserHandler("999");
		expect(res.success).toBe(false);
		if (!res.success) {
			expect(res.error.code).toBe(ReasonPhrases.NOT_FOUND);
		}
	});

	it("returns all users without passwords", () => {
		const res = controller.getAllUserHandler();
		expect(res.success).toBe(true);
		if (res.success && Array.isArray(res.data)) {
			res.data.forEach((user) => {
				expect(user).not.toHaveProperty("password");
			});
		}
	});

	it("updates user email successfully", () => {
		const res = controller.updateUserHandler({
			id: "1",
			email: "new@example.com",
		});
		expect(res.success).toBe(true);
		if (res.success) {
			expect(res.data.email).toBe("new@example.com");
		}
	});

	it("fails update with invalid email", () => {
		const res = controller.updateUserHandler({
			id: "1",
			email: "invalid-email",
		});
		expect(res.success).toBe(false);
	});
});
