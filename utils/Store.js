import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  email: "",
  plan: "",
  subject: "",
  message: "",
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SAVE_FORM_DATA": {
      const formData = action.payload;
      return { ...state, email: formData.email, plan: formData.plan, subject: formData.subject, message: formData.message, isLoading: formData.isLoading, error: formData.error };
    }

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
