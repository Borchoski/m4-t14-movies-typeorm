import { number, z } from "zod";

const createMovieSchema = z.object({
    name: z.string().max(50),
    description: z.string(),
    duration: z.number(),
    price: z.number(),
});

const movieUpdateSchema = createMovieSchema.partial();

export { createMovieSchema, movieUpdateSchema };
