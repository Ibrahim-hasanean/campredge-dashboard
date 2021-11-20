import { API_COMMON_STATUS, getUnknownStatusError } from "helpers/api-helper";
import axios from "axios";

export const addProduct = async productData => {
  let url = "/admin/product";

  try {
    const response = await axios.post(url, productData, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>"
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
      case API_COMMON_STATUS.FAILED:
        data = {
          responseStatus: API_COMMON_STATUS.FAILED
        };
        break;
      case API_COMMON_STATUS.Valid_Error:
        data = {
          responseStatus: API_COMMON_STATUS.Valid_Error,
          message: response.data?.errors[0]?.msg
        };
        break;
      default:
        data = getUnknownStatusError();
    }
    return data;
  } catch (error) {
    console.log("errorrrrr");
    console.log(error);
  }
};

export const updateProduct = async (productId, productData) => {
  let url = `/admin/update/product/${productId}`;

  try {
    const response = await axios.post(url, productData, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>"
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
      case API_COMMON_STATUS.FAILED:
        data = {
          responseStatus: API_COMMON_STATUS.FAILED
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

export const getProduct = async query => {
  let url = "/admin/products";
  if (query) {
    url = `/admin/products?${query}`;
  }
  console.log(url);
  try {
    const response = await axios.get(url, {
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

export const toggleAcitvateProduct = async id => {
  let url = `/admin/activate/product/${id}`;

  console.log(url);
  try {
    const response = await axios.get(url, {
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
    console.log(error);
    console.error(error);
  }
};

export const getProductsTypes = async query => {
  let url = "/product_types";
  if (query) {
    url = `/product_types?${query}`;
  }
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`
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
