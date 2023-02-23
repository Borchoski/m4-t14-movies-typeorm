import { AppDataSource } from "../data-source";
import { Movies } from "../entities";

const retriverMoviesService = async (): Promise<Movies[]> => {
    const movieRepo = AppDataSource.getRepository(Movies);
    return await movieRepo.find();
};

export { retriverMoviesService };
