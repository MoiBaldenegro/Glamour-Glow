import { destroyUserService } from "../../handlers";
import { NextFunction, Request, Response } from "express";
import { readAndDeleteUserType } from "../../schemas/userSchema";

export const deleteUser = async (
  req: Request<readAndDeleteUserType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedUser = await destroyUserService(id);
    return res.status(200).send(deletedUser);
  } catch (error) {
    return next(error);
  }
};
