import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";

const retriverMoviesService = async (): Promise<Movies[]> => {
    const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);
    return await movieRepo.find();
};

export { retriverMoviesService };
