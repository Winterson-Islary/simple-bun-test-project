import { UserService } from "@/services";
import {
	CreateUserDto,
	UpdateUserDto,
	UserDto,
	createApiResponse,
	type ApiResponseType,
	type CreateUserDtoType,
	type UpdateUserDtoType,
} from "@/dtos";
import { ReasonPhrases } from "http-status-codes";

export class UserController {
	private service: UserService;
	constructor() {
		this.service = new UserService();
	}
	getUserHandler(id: string): ApiResponseType<typeof UserDto> {
		const data = this.service.getUser(id);
		if (!data)
			return {
				success: false,
				error: { code: ReasonPhrases.NOT_FOUND, message: "user not found" },
			};
		return createApiResponse(UserDto).parse({ success: true, data });
	}
	getAllUserHandler(): ApiResponseType<ReturnType<typeof UserDto.array>> {
		const data = this.service.getUsers();
		if (!data)
			return {
				success: false,
				error: {
					code: ReasonPhrases.INTERNAL_SERVER_ERROR,
					message: "failed to get users",
				},
			};
		return createApiResponse(UserDto.array()).parse({ success: true, data });
	}
	createUserHandler(createUserProps: unknown): ApiResponseType<typeof UserDto> {
		let dto: CreateUserDtoType;
		try {
			dto = CreateUserDto.parse(createUserProps);
		} catch (_error) {
			return {
				success: false,
				error: {
					code: ReasonPhrases.BAD_REQUEST,
					message: "invalid user data",
				},
			};
		}
		const data = this.service.createUser(dto);
		if (!data)
			return {
				success: false,
				error: {
					code: ReasonPhrases.INTERNAL_SERVER_ERROR,
					message: "failed to create user",
				},
			};
		return createApiResponse(UserDto).parse({ success: true, data });
	}
	updateUserHandler(updateUserProps: unknown): ApiResponseType<typeof UserDto> {
		let dto: UpdateUserDtoType;
		try {
			dto = UpdateUserDto.parse(updateUserProps);
		} catch (_error) {
			return {
				success: false,
				error: {
					code: ReasonPhrases.BAD_REQUEST,
					message: "failed to update user",
				},
			};
		}
		const data = this.service.updateUser(dto);
		if (!data)
			return {
				success: false,
				error: {
					code: ReasonPhrases.INTERNAL_SERVER_ERROR,
					message: "failed to update user",
				},
			};
		return createApiResponse(UserDto).parse({ success: true, data });
	}
}
