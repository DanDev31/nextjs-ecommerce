"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useForm from "@/hooks/useForm";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import Spinner from "../Spinner";

const Register = () => {
  const { values, handleChange, resetValues } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();

  const router = useRouter();

  const onRegister = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        signIn("credentials", {
          email: values.email,
          password: values.password,
        });
        setLoading(false);
        router.push("/");
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <form
      className="shadow-lg p-5 space-y-4 min-w-[320px] bg-white"
      onSubmit={onSubmit}
    >
      <header className="space-y-1">
        <h3 className="text-2xl font-semibold">Sign Up</h3>
        <h6 className="text-gray-400 text-xs">
          Already have an account?
          <Link
            href="/authentication/login"
            className="ml-1 text-indigo-900 underline"
          >
            Sign In
          </Link>
        </h6>
      </header>

      {error && (
        <span className="block bg-red-200 py-1 px-2 text-red-500 text-xs text-center">
          Email already registered
        </span>
      )}

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold">Name:</label>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          onChange={(e) => handleChange(e)}
          className="outline-none border border-gray-300 rounded-sm p-2 text-gray-400 placeholder:text-gray-300 placeholder:font-medium placeholder:text-xs focus:border-gray-500 text-sm"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold">Email address:</label>
        <input
          type="email"
          placeholder="youremail@example.com"
          name="email"
          onChange={(e) => handleChange(e)}
          className="outline-none border border-gray-300 rounded-sm p-2 text-gray-400 placeholder:text-gray-300 placeholder:font-medium placeholder:text-xs focus:border-gray-500 text-sm"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold">Password:</label>
        <input
          type="password"
          placeholder="youremail@example.com"
          name="password"
          onChange={(e) => handleChange(e)}
          className="outline-none border border-gray-300 rounded-sm p-2 text-gray-400 placeholder:text-gray-300 placeholder:font-medium placeholder:text-xs focus:border-gray-500 text-sm"
        />
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 duration-150 rounded-sm text-white font-semibold text-xs uppercase text-center py-3 w-full"
          >
            Sign Up
          </button>

          <div className="grid grid-cols-3 place-items-center text-xs text-gray-300 w-full relative">
            <span className="bg-gray-300 w-full h-[1px]"></span>
            <span>or sign up with</span>
            <span className="bg-gray-300 w-full h-[1px]"></span>
          </div>

          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
            className="border-2 border-orange-600 hover:bg-orange-50 duration-150 rounded-sm bg-white flex items-center justify-center gap-2 py-2 w-full"
          >
            <FcGoogle />
            <span className="font-semibold text-sm text-orange-600">
              Google
            </span>
          </button>
        </>
      )}
    </form>
  );
};

export default Register;
