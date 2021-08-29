import React, { createContext, useReducer } from "react";
import { GLOBALSTATE_ACTIONS } from "app/constants";

const initialState = {
  isAuthorized: !!localStorage.getItem("isAuth"),
  admin: {
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || ""
  }
};

export const GlobalContext = createContext(initialState);

const Reducer = (state, action) => {
  switch (action.type) {
    case GLOBALSTATE_ACTIONS.SET_IS_AUTH: {
      const payload = action.data;
      localStorage.setItem("token", payload.accessToken);
      localStorage.setItem("refreshToken", payload.refreshToken);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("name", payload.data.name);
      return {
        ...state,
        isAuthorized: true,
        admin: {
          name: payload.data.name,
          email: payload.data.email
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
