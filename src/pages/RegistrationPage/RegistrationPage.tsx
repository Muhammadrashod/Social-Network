import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";
import { LoginInfo } from "../../components/UI/LoginInfo/LoginInfo";

export const RegistrationPage = () => {
  return (
      <Container>
      <StyledLoginPage>
        <Heading headingText="Регистрация" />
        <form>
          <Input
            isError={false}
            type="tel"
            placeholder="Имя и фамилия"
            errorMessage="Ошибка!"
          />
          <Input
            isError={false}
            type="text"
            placeholder="Номер телефона"
            errorMessage="Неверный пароль!"
          />
           <Input
            isError={false}
            type="password"
            placeholder="Пароль"
            errorMessage="Неверный пароль!"
          />
          <Button isPrimary buttonText="Зарегистрироваться" />
        </form>
        <LoginInfo />
      </StyledLoginPage>
    </Container>
  );
};
