import { API_COMMON_STATUS, getUnknownStatusError } from "helpers/api-helper";
import axios from "axios";

export const login = async loginData => {
  try {
    const response = await axios.post(`/admin/login`, loginData);
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.SUCCESS:
        data = {
          responseStatus: API_COMMON_STATUS.SUCCESS,
          ...response.data
        };
        break;
      case API_COMMON_STATUS.BAD_REQUEST:
        data = {
          responseStatus: API_COMMON_STATUS.BAD_REQUEST,
          message: response.data.message
        };
        break;
      default:
        data = getUnknownStatusError();
    }
    return data;
  } catch (error) {
    console.log(error, error.message, error.name);
    console.error(error);
  }
};
