import React from "react";
import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";

interface PhoneInputProps {
    placeholder: string;
    type: string;
    errorMessage?: string;
    isError: boolean;
  }

export const PhoneInput = ({ placeholder, type, errorMessage, isError }: PhoneInputProps) => {
    const formatPhoneNumber = (phoneNumber: string): string => {
      const cleaned = ('' + phoneNumber).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})(\d{2})$/);
      if (match) {
        return `+998 (${match[1]}) ${match[2]} ${match[3]} ${match[4]}`;
      }
      return phoneNumber;
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === 'tel') {
        e.target.value = formatPhoneNumber(e.target.value);
      }
    };
  
    return (
      <InputContainer>
        <StyledInput type={type} placeholder={placeholder} onChange={handleInputChange} />
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputContainer>
    );
  };
  