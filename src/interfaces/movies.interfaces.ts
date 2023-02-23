import { Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities";
import { movieUpdateSchema } from "../schemas/movies.schemas";

interface iMoviePayload {
    name: string;
    description: string;
    duration: number;
    price: number;
}
type iMovieRepo = Repository<Movie>;

type iMovieUpdate = z.infer<typeof movieUpdateSchema>;

export { iMoviePayload, iMovieRepo, iMovieUpdate };
