import { iMoviePayload } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { AppError } from "../error";
import { Repository } from "typeorm";

const createMovieService = async (payload: iMoviePayload): Promise<Movies> => {
    const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);
    if (await movieRepo.exist({ where: { name: payload.name } })) {
        throw new AppError("Movie already exists", 400);
    }

    const movie = movieRepo.create(payload);

    await movieRepo.save(movie);

    return movie;
};

export { createMovieService };
