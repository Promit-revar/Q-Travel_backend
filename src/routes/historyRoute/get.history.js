import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../helpers/custome.error";
import { logsErrorAndUrl, responseGenerators } from "../../lib/utils";
import { ValidationError } from "joi";
import path from "path";
import { setPagination } from "../../commons/common-functions";
import HistoryModel from "../../models/historyModel";

export const getSingleHistoryHandler = async (req, res) => {
  try {
    if (!req.params.historyId)
      throw new CustomError(`Error, please provide a history id`);

    let historyData = await HistoryModel.findOne({
      _id: req.params.historyId,
    });

    if (!historyData) throw new CustomError(`Error, history not found`);

    return res
      .status(StatusCodes.OK)
      .send(
        responseGenerators(
          { historyData },
          StatusCodes.OK,
          "HISTORY FOUND SUCCESSFULLY",
          0
        )
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

export const getListHistoryHandler = async (req, res) => {
  try {
    const pagination = setPagination(req.query);

    let { user_id, place, city, state, country } = req.query;
    let where = {};

    if (user_id) {
      where = {
        ...where,
        user_id,
      };
    }

    let options = [];

    if (place) {
      let placeArray = place.split(",");
      const regexArray = placeArray.map((item) => new RegExp(item, "i"));
      options.push({ place: { $in: regexArray } });
      //   where = {
      //     ...where,
      //     place: { $in: regexArray },
      //   };
    }

    if (city) {
      let cityArray = city.split(",");
      const regexArray = cityArray.map((item) => new RegExp(item, "i"));
      options.push({ city: { $in: regexArray } });
    }

    if (state) {
      let stateArray = state.split(",");
      const regexArray = stateArray.map((item) => new RegExp(item, "i"));
      options.push({ state: { $in: regexArray } });
    }

    if (country) {
      let countryArray = country.split(",");
      const regexArray = countryArray.map((item) => new RegExp(item, "i"));
      options.push({ country: { $in: regexArray } });
    }

    where = { $or: options };

    let paginated_data = await HistoryModel.find({ ...where })
      .sort({ ...pagination.sort })
      .skip(pagination.offset)
      .limit(pagination.limit);

    let total_count = await HistoryModel.count(where);
    return res
      .status(StatusCodes.OK)
      .send(
        responseGenerators(
          { paginated_data, total_count },
          StatusCodes.OK,
          "HISTORY FOUND SUCCESSFULLY",
          0
        )
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
