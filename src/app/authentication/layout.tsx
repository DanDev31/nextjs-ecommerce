import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid place-items-center h-[calc(100vh-60px)]">
      <div>{children}</div>
    </section>
  );
};

export default AuthLayout;
