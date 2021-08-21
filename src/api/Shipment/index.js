import { API_COMMON_STATUS, getUnknownStatusError } from "helpers/api-helper";
import axios from "axios";

export const getShipments = async query => {
  let url = "/admin/shipments";
  if (query) {
    url = `/admin/shipments?${query}`;
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
          message: response.data.msg
        };
        break;
      case API_COMMON_STATUS.ERROR:
        data = {
          responseStatus: API_COMMON_STATUS.ERROR,
          message: response.data.msg
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

export const addShipment = async shipmentData => {
  try {
    const response = await axios.post(`/admin/shipment`, shipmentData, {
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
          message: response.data.msg
        };
        break;
      case API_COMMON_STATUS.CONFLICT:
        data = {
          responseStatus: API_COMMON_STATUS.CONFLICT,
          message: response.data.msg
        };
        break;
      case API_COMMON_STATUS.ERROR:
        data = {
          responseStatus: API_COMMON_STATUS.ERROR,
          message: response.data.msg
        };
        break;
      case API_COMMON_STATUS.BAD_REQUEST:
        data = {
          responseStatus: API_COMMON_STATUS.BAD_REQUEST,
          message: response.data.msg
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

export const editeShipment = async shipmentData => {
  try {
    const response = await axios.post(`/admin/update/shipment`, shipmentData, {
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

export const delteShipment = async shipmentId => {
  try {
    const response = await axios.delete(`/admin/shipment/${shipmentId}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`
      }
    });
    console.log(response);
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.SUCCESS:
        data = {
          responseStatus: API_COMMON_STATUS.SUCCESS
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
