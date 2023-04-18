"use client";
import Image from "next/image";
import React from "react";
import success from "../../public/assets/checked.png";
import error from "../../public/assets/cancel.png";
import { useSession } from "next-auth/react";

interface CheckoutStatusProps {
  status: string;
}

const CheckoutStatus = ({ status }: CheckoutStatusProps) => {
  let content;
  const { data: session } = useSession();
  if (status === "success") {
    content = (
      <>
        <p>
          We are delighted to inform you that your payment has been successfully
          processed. <br /> Your transaction ID is AC-
          {Math.floor(Math.random() * 1000000000)}.
          <br />
          <br />
          Please keep this for your records in case you need to refer to it in
          the future. <br />
          Thank you for choosing our services.
        </p>
      </>
    );
  } else {
    content = (
      <>
        <p className="text-xs">
          We regret to inform you that your transaction with us has been
          canceled. We apologize for any inconvenience this may have caused.
          <br /> <br />
          Our team is here to assist you and provide any necessary information
          about the cancellation.
        </p>
      </>
    );
  }
  return (
    <section className="grid place-content-center">
      <div className="bg-gray-50 rounded-xl shadow-md p-5 space-y-3 md:w-[70%] lg:w-[60%] mx-auto mt-8 mb-5 max-h-[400px] overflow-y-auto">
        <div className="flex justify-end">
          <div className="w-[45px]">
            <Image
              src={status === "success" ? success : error}
              alt="Success icon"
            />
          </div>
        </div>

        <div className="text-sm space-y-3">
          <h4 className="font-medium">Dear {session?.user?.name},</h4>
          <p>{content}</p>
          <div>Best regards,</div>
          <p className="font-semibold">PawFriends.</p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutStatus;
