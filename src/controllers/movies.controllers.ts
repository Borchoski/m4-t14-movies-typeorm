import { Request, Response } from "express";
import { createMovieService } from "../services/newMovie.services";
import { retriverMoviesService } from "../services/retriverMovies.servives";

const createMovieController = async (req: Request, res: Response) => {
    const movie = await createMovieService(req.body);
    return res.status(201).json(movie);
};

const retriverMoviesController = async (req: Request, res: Response) => {
    const movies = await retriverMoviesService();

    return res.status(200).json(movies);
};

export { createMovieController, retriverMoviesController };
