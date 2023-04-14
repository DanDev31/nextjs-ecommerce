"use client";
import { useState } from "react";

type FormValues = {
  name?: string;
  email?: string;
  password?: string;
};

interface UseFormInterface {
  values: FormValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetValues: () => void;
}

const useForm = (initialState: FormValues): UseFormInterface => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const resetValues = () => {
    setValues(initialState);
  };

  return { values, handleChange, resetValues };
};

export default useForm;
