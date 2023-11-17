import React from "react";
import { StyledInput } from "./Input.style";

interface InputProps {
  placeholder: string;
  type: string; 
}

export const Input = ({ placeholder, type }: InputProps) => {
  return <StyledInput type={type} placeholder={placeholder} />; // Use the type prop in the input element
};
