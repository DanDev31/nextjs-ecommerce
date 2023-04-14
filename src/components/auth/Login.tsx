"use client";
import useForm from "@/hooks/useForm";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { values, handleChange, resetValues } = useForm({
    email: "",
    password: "",
  });

  const makeRequest = async () => {
    try {
      //   const user = await fetch("http://localhost:3000/api/user", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(values),
      //   });
      //   const data = user.json();
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    makeRequest();
    console.log();
  };

  return (
    <form
      className="shadow-lg p-5 space-y-4 min-w-[320px] bg-white"
      onSubmit={onSubmit}
    >
      <header className="space-y-1">
        <h3 className="text-2xl font-semibold">Login</h3>
        <h6 className="text-gray-400 text-xs">
          Doesn´t have an account yet?
          <Link
            href="/authentication/register"
            className="ml-1 text-indigo-900 underline"
          >
            Sign Up
          </Link>
        </h6>
      </header>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold">Email address:</label>
        <input
          type="email"
          placeholder="youremail@example.com"
          className="outline-none border border-gray-300 rounded-sm p-2 text-gray-400 placeholder:text-gray-300 placeholder:font-medium placeholder:text-xs focus:border-gray-500 text-xs"
          name="email"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold">Password:</label>
        <input
          type="password"
          placeholder="youremail@example.com"
          className="outline-none border border-gray-300 rounded-sm p-2 text-gray-400 placeholder:text-gray-300 placeholder:font-medium placeholder:text-xs focus:border-gray-500 text-xs"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 duration-150 rounded-sm text-white font-semibold text-xs uppercase text-center py-3 w-full"
      >
        Login
      </button>

      <div className="grid grid-cols-3 place-items-center text-xs text-gray-300 w-full relative">
        <span className="bg-gray-300 w-full h-[1px]"></span>
        <span>or login with</span>
        <span className="bg-gray-300 w-full h-[1px]"></span>
      </div>

      <button className="border-2 border-orange-600 hover:bg-orange-50 duration-150 rounded-sm bg-white flex items-center justify-center gap-2 py-2 w-full">
        <FcGoogle />
        <span className="font-semibold text-sm text-orange-600">Google</span>
      </button>
    </form>
  );
};

export default Login;
