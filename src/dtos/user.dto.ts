import z from "zod";

export const UserDto = z.object({
	id: z.string(),
	name: z.string(),
	email: z.email(),
});
export type UserDtoType = z.infer<typeof UserDto>;

export const CreateUserDto = z.object({
	name: z.string(),
	email: z.email(),
	password: z.string(),
});
export type CreateUserDtoType = z.infer<typeof CreateUserDto>;

export const UpdateUserDto = z.object({
	id: z.string(),
	name: z.string().optional(),
	email: z.email().optional(),
	password: z.string().optional(),
});
export type UpdateUserDtoType = z.infer<typeof UpdateUserDto>;
