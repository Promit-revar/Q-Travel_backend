import { USER_MESSAGE } from "../../commons/global-constants";
import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../helpers/custome.error";
import { logsErrorAndUrl, responseGenerators } from "../../lib/utils";
import { ValidationError } from "joi";
import path from "path";
import UserModel from "../../models/userModel";

export const deleteUserHandler = async (req, res) => {
  try {
    let user_id;
    if (req.isAdmin) {
      if (!req.params.userId)
        throw new CustomError(`Error, please provide a user id`);
      else user_id = req.params.userId;
    } else {
      user_id = req.tokenData._id;
    }

    let deleteUser = await UserModel.findOneAndUpdate(
      { _id: user_id, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );
    if (!deleteUser) throw new CustomError(`Error, User does not exist`);
    return res
      .status(StatusCodes.OK)
      .send(
        responseGenerators({}, StatusCodes.OK, USER_MESSAGE.USER_DELETED, 0)
      );
  } catch (error) {
    logsErrorAndUrl(req, error, path.basename(__filename));
    if (error instanceof ValidationError || error instanceof CustomError) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(
          responseGenerators({}, StatusCodes.BAD_REQUEST, error.message, 1)
        );
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(
        responseGenerators(
          {},
          StatusCodes.INTERNAL_SERVER_ERROR,
          "Internal Server Error",
          1
        )
      );
  }
};