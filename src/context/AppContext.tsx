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
};

const Context = createContext<ContextType>({
  state: {
    cart: [] as ProductInterface[],
    total: 0,
    totalProducts: 0,
  },
  dispatch: () => {},
});

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      dispatch({
        type: "LOAD_DATA",
        payload: JSON.parse(localStorage.getItem("cart")!),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default AppContext;

export const useAppContext = () => useContext(Context);
