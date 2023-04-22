"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import AppContext from "@/context/AppContext";
import dynamic from "next/dynamic";

const dynamicContenxt = dynamic(() => import("../context/AppContext"), {
  ssr: false,
});

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AppContext>
      <SessionProvider>{children}</SessionProvider>
    </AppContext>
  );
};

export default Providers;
