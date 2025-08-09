import z from "zod"

export const UserDto = z.object({
	id: z.string(),
	name: z.string(),
	email: z.email(),
})

export type UserDtoType = z.infer<typeof UserDto>