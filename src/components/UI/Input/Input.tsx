import React from "react";
import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";

interface InputProps {
  placeholder: string;
  type: string;
  errorMessage?: string;
}

export const Input = ({ placeholder, type, errorMessage }: InputProps) => {
  return (
    <InputContainer>
      <StyledInput type={type} placeholder={placeholder} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
};
