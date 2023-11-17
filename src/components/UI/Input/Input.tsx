import React from "react";
import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";

interface InputProps {
  placeholder: string;
  type: string;
  errorMessage?: string;
  isError: boolean;
}

export const Input = ({ placeholder, type, errorMessage, isError }: InputProps) => {
  return (
    <InputContainer>
      <StyledInput type={type} placeholder={placeholder} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
