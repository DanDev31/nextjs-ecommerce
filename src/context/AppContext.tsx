"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { reducer } from "./reducer";
import { ProductInterface } from "@/interfaces/products";

// Types for Reducer State
export type InitialState = {
  cart: ProductInterface[];
  total: number;
  totalProducts: number;
};

const initialState: InitialState = {
  cart: [],
  total: 0,
  totalProducts: 0,
};

// Types for Context

type ContextType = {
  state: InitialState;
  dispatch: React.Dispatch<{
    type: string;
    payload: any;
  }>;
  loading: boolean;
};

const Context = createContext<ContextType>({
  state: {
    cart: [] as ProductInterface[],
    total: 0,
    totalProducts: 0,
  },
  dispatch: () => {},
  loading: false,
});

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      dispatch({
        type: "LOAD_DATA",
        payload: JSON.parse(localStorage.getItem("cart")!),
      });
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch, loading }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;

export const useAppContext = () => useContext(Context);
