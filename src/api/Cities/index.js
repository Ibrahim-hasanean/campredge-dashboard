import { API_COMMON_STATUS, getUnknownStatusError } from "helpers/api-helper";
import axios from "axios";

export const getCities = async query => {
  let url = "/cities";
  if (query) {
    url = `/cities?${query}`;
  }
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    });
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.SUCCESS:
        data = {
          responseStatus: API_COMMON_STATUS.SUCCESS,
          ...response.data
        };
        break;
      case API_COMMON_STATUS.UNAUTHORIZED:
        data = {
          responseStatus: API_COMMON_STATUS.UNAUTHORIZED,
          message: response.data.error
        };
        break;
      case API_COMMON_STATUS.ERROR:
        data = {
          responseStatus: API_COMMON_STATUS.ERROR,
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
export const addCity = async cityData => {
  try {
    const response = await axios.post(`/admin/city`, cityData, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`
      }
    });
    console.log(response);
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.SUCCESS:
        data = {
          responseStatus: API_COMMON_STATUS.SUCCESS,
          ...response.data
        };
        break;
      case API_COMMON_STATUS.UNAUTHORIZED:
        data = {
          responseStatus: API_COMMON_STATUS.UNAUTHORIZED,
          message: response.data.errors[0].msg
        };
        break;
      case API_COMMON_STATUS.CONFLICT:
        data = {
          responseStatus: API_COMMON_STATUS.CONFLICT,
          message: response.data.errors[0].msg
        };
        break;
      case API_COMMON_STATUS.ERROR:
        data = {
          responseStatus: API_COMMON_STATUS.ERROR,
          message: response.data.errors[0].msg
        };
        break;
      case API_COMMON_STATUS.BAD_REQUEST:
        data = {
          responseStatus: API_COMMON_STATUS.BAD_REQUEST,
          message: response.data.errors[0].msg
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

export const deleteUser = async cityId => {
  try {
    const response = await axios.delete(`/admin/city/${cityId}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    });
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.SUCCESS:
        data = {
          responseStatus: API_COMMON_STATUS.SUCCESS
        };
        break;
      case API_COMMON_STATUS.UNAUTHORIZED:
        data = {
          responseStatus: API_COMMON_STATUS.UNAUTHORIZED
        };
        break;
      case API_COMMON_STATUS.ERROR:
        data = {
          responseStatus: API_COMMON_STATUS.ERROR
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

export const editeCity = async (cityId, cityData) => {
  try {
    const response = await axios.post(
      `/admin/update/city`,
      { cityId, ...cityData },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`
        }
      }
    );
    console.log(response);
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.SUCCESS:
        data = {
          responseStatus: API_COMMON_STATUS.SUCCESS,
          ...response.data
        };
        break;
      case API_COMMON_STATUS.UNAUTHORIZED:
        data = {
          responseStatus: API_COMMON_STATUS.UNAUTHORIZED,
          message: response.data.errors[0].msg
        };
        break;
      case API_COMMON_STATUS.CONFLICT:
        data = {
          responseStatus: API_COMMON_STATUS.CONFLICT,
          message: response.data.errors[0].msg
        };
        break;
      case API_COMMON_STATUS.ERROR:
        data = {
          responseStatus: API_COMMON_STATUS.ERROR,
          message: response.data.errors[0].msg
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
