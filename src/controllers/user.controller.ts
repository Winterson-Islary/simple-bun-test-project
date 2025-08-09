import { UserService } from "@/services";
import { UserDto, createApiResponse, type ApiResponseType } from "@/dtos";
import { ReasonPhrases } from "http-status-codes"

export class UserController {
	private service: UserService;
	constructor() {
		this.service = new UserService()
	}
	getUserHandler(id: string): ApiResponseType<typeof UserDto> {
		const dto = this.service.getUser(id);
		if (!dto) return { success: false, error: { code: ReasonPhrases.NOT_FOUND, message: "user not found" } }
		return createApiResponse(UserDto).parse({ success: true, data: dto })
	}
}