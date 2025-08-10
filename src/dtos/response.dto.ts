import z from "zod";

const SuccessResponse = <T extends z.ZodTypeAny>(schema: T) =>
	z.object({
		success: z.literal(true),
		data: schema,
		meta: z.record(z.string(), z.any()).optional(),
	});
const ErrorResponse = z.object({
	success: z.literal(false),
	error: z.object({
		code: z.string(),
		message: z.string(),
		details: z.any().optional(),
	}),
});

export const createApiResponse = <T extends z.ZodTypeAny>(schema: T) =>
	z.union([SuccessResponse(schema), ErrorResponse]);
export type ApiResponseType<T extends z.ZodTypeAny> = z.infer<
	ReturnType<typeof createApiResponse<T>>
>;
