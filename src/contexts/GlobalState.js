import React, { createContext, useReducer } from "react";
import { GLOBALSTATE_ACTIONS } from "app/constants";

const initialState = {
  isAuthorized: !!localStorage.getItem("isAuth"),
  admin: {
    firstname: localStorage.getItem("firsname") || "",
    lastname: localStorage.getItem("lastname") || ""
  }
};

export const GlobalContext = createContext(initialState);

const Reducer = (state, action) => {
  switch (action.type) {
    case GLOBALSTATE_ACTIONS.SET_IS_AUTH: {
      const payload = action.data;
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("firsname", payload.admin.firstName);
      localStorage.setItem("lastname", payload.admin.secondName);
      return {
        ...state,
        isAuthorized: true,
        admin: {
          firstname: payload.admin.firstName,
          lastname: payload.admin.secondName,
          phoneNumber: payload.admin.phoneNumber
        }
      };
    }
    case GLOBALSTATE_ACTIONS.LOGOUT: {
      localStorage.clear();
      return {
        ...state,
        isAuthorized: false
      };
    }
    default:
      return state;
  }
};

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
