import { MEMBER_MESSAGE } from "../../commons/global-constants";
import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../helpers/custome.error";
import { logsErrorAndUrl, responseGenerators } from "../../lib/utils";
import { ValidationError } from "joi";
import path from "path";
import MemberModel from "../../models/memberModel";

export const deleteMemberHandler = async (req, res) => {
  try {
    let member_id;
    if (req.isAdmin) {
      if (!req.params.memberId)
        throw new CustomError(`Error, please provide a member id`);
      else member_id = req.params.memberId;
    } else {
      member_id = req.tokenData._id;
    }

    let deleteMember = await MemberModel.findOneAndUpdate(
      { _id: member_id, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );
    if (!deleteMember) throw new CustomError(`Error, Member does not exist`);
    return res
      .status(StatusCodes.OK)
      .send(
        responseGenerators({}, StatusCodes.OK, MEMBER_MESSAGE.MEMBER_DELETED, 0)
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