import { AppDataSource } from "../data-source";
import { Movies } from "../entities";

const updateMoviesServices = async (payload: any, id: number) => {
    const movieRepo = AppDataSource.getRepository(Movies);
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
