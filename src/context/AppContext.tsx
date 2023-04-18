"use client";

import { ProductInterface } from "@/interfaces/products";
import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

// Types for Reducer State
export type InitialState = {
  cart: ProductInterface[];
  total: number;
  totalProducts: number;
};

const storagedState = JSON.parse(localStorage.getItem("cart") || "{}");

const initialState: InitialState =
  JSON.stringify(storagedState) === "{}"
    ? {
        cart: [],
        total: 0,
        totalProducts: 0,
      }
    : storagedState;

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
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default AppContext;

export const useAppContext = () => useContext(Context);
