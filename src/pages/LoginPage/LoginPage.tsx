import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input"
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/UI/RegistartionInfo/ReagistartionInfo";

export const LoginPage = () => {
  return (
    <Container>
       <div className="LoginPage">
        <Heading headingText="Авторизация" />
        <form>
        <Input type="tel" placeholder="Номер телефона" />
        <Input type="text" placeholder="Пароль" />
          <Button isPrimary buttonText="Войти"/>
        </form>
        <StyledLink to="/" linkText="Забыли пароль?" />
        <RegistrationInfo />
        </div>
    </Container>
  );
};
