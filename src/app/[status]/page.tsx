import CheckoutStatus from "@/components/CheckoutStatus";
import React from "react";

type Params = {
  params: {
    status: string;
  };
};

const StatusPage = ({ params: { status } }: Params) => {
  return <CheckoutStatus status={status} />;
};

export default StatusPage;
