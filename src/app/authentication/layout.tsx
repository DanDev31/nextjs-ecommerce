import Image from "next/image";
import React from "react";
import shape from "../../../public/assets/shape.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid place-items-center h-[calc(100vh-60px)]">
      <div>{children}</div>
    </section>
  );
};

export default AuthLayout;
