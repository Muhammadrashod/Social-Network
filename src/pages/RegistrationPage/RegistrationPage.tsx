import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";
import { LoginInfo } from "../../components/UI/LoginInfo/LoginInfo";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IRegistrationForm {
  username: string;
  userphone: string;
  userpassword: string;
}

export const RegistrationPage = () => {
  const { control, handleSubmit } = useForm<IRegistrationForm>({
    defaultValues: {
      username: "",
      userphone:"",
      userpassword:"",
    },
  });

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log("DATA: ", data);
  };

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                isError={false}
                type="tel"
                placeholder="Имя и фамилия"
                errorMessage="Ошибка!"
                {...field}
              />
            )}
          />
          <Controller
           name="userphone"
           control={control}
            render={({field }) => (
              <Input
                isError={false}
                type="text"
                placeholder="Номер телефона"
                errorMessage="Неверный пароль!"
                {...field}
              />
            )}
          />
          <Controller
           name="userpassword"
           control={control}
            render={({ field }) => (
              <Input
                isError={false}
                type="password"
                placeholder="Пароль"
                errorMessage="Неверный пароль!"
                {...field}
              />
            )}
          />
          <Button type="submit" isPrimary buttonText="Зарегистрироваться" />
        </form>
        <LoginInfo />
      </StyledLoginPage>
    </Container>
  );
};
