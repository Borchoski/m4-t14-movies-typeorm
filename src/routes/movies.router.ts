import { Router } from "express";
import {
    createMovieController,
    retriverMoviesController,
    updateMovieController,
} from "../controllers/movies.controllers";
import verifyData from "../middlewares/verifyData.middlewares";
import { verifyId } from "../middlewares/verifyId.middlewares";
import {
    createMovieSchema,
    movieUpdateSchema,
} from "../schemas/movies.schemas";

const moviesRouter: Router = Router();

moviesRouter.post("", verifyData(createMovieSchema), createMovieController);
moviesRouter.get("", retriverMoviesController);
moviesRouter.patch(
    "/:id",
    verifyId,
    verifyData(movieUpdateSchema),
    updateMovieController
);

export { moviesRouter };
