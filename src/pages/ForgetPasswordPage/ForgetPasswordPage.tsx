import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";
import { LoginInfo } from "../../components/UI/LoginInfo/LoginInfo";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Span } from "../../components/UI/Span/Span";

interface IRegistrationForm {
  username: string;
  userphone: string;
  userpassword: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  username: yup.string().required("Обьязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обьязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обьязательное поле!"),
});

export const ForgetPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
      userpassword: "",
    },
  });

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log("DATA: ", data);
  };

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Забыли Пароль?" />
        <Span SpanText="Укажите свой номер телефона, чтобы получить код для сброса пароля." />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userphone ? true : false}
                type="text"
                placeholder="Номер телефона"
                errorMessage={errors.userphone?.message}
                {...field}
              />
              )}
          />
              <Button disabled={!!Object.keys(errors).length} type="submit" isPrimary buttonText="Отправить" />
        </form>
      </StyledLoginPage>
    </Container>
  );
};