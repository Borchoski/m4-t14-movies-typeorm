import { Router } from "express";
import {
    createMovieController,
    retriverMoviesController,
} from "../controllers/movies.controllers";
import verifyData from "../middlewares/verifyData.middlewares";
import { createMovieSchema } from "../schemas/movies.schemas";

const moviesRouter: Router = Router();

moviesRouter.post("", verifyData(createMovieSchema), createMovieController);
moviesRouter.get("", retriverMoviesController);

export { moviesRouter };
