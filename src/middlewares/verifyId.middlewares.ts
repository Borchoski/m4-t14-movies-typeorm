import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { AppError } from "../error";

const verifyId = async (req: Request, res: Response, next: NextFunction) => {
    const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);
    if (!(await movieRepo.exist({ where: { id: +req.params.id } }))) {
        throw new AppError("Id not found", 400);
    }

    return next();
};

export { verifyId };
