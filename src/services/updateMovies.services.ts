import { iMoviePayload } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { AppError } from "../error";

const updateMoviesServices = async (payload: any, id: number) => {
    const movieReq = payload;
    // const movieReqKeys = Object.keys(movieReq)
    // const movieReqValues = Object.values(movieReq)

    // const movieRepo = AppDataSource.getRepository(Movies);
    // const updatedAwait = movieRepo.save({ id: id, ...Object.keys(movieReq): movieReqValues });

    // const movieRepo = AppDataSource.getRepository(Movies);

    // const movie = await movieRepo.findOneBy({ id: 1 });
    // movie!.name = "Maykel N.";

    // await movieRepo.save(movie!);

    // return movieRepo;
};
