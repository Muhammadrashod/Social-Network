import React from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  buttonText: string;
  isPrimary: boolean;
}

export const Button = ({ buttonText, isPrimary, type }: ButtonProps) => {
  return <StyledButton type={type} $isPrimary={isPrimary}>
    {buttonText}
    </StyledButton>;
};
