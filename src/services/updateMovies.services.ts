import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";
import { iMovieRepo } from "../interfaces";

const updateMoviesServices = async (payload: any, id: number) => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie);

    console.log(movieRepo);

    if (payload.name) {
        if (
            await movieRepo.findOneBy({
                name: payload.name,
            })
        ) {
            throw new AppError("Name already exists", 409);
        }
    }
    const oldData = await movieRepo.findOneBy({
        id: id,
    });
    const movie = movieRepo.create({
        ...oldData,
        ...payload,
    });

    return await movieRepo.save(movie);
};

export { updateMoviesServices };
