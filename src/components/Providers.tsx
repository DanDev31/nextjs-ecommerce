"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import AppContext from "@/context/AppContext";

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
