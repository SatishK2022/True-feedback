import {z} from "zod"

export const messageSchema = z
    .object({
        content: z
            .string()
            .min(10, "Content must be atleast 10 char")
            .max(300, "Content must be less than 300 char")
    })