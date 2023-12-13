import React, { useEffect } from "react";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";
import { LoginInfo } from "../../components/UI/LoginInfo/LoginInfo";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { changeUser } from "../../store/slices/userSlice";

interface IRegistrationForm {
  username: string;
  userphone: string;
  userpassword: string;
  useremail: string;
  usercity: string;
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
  useremail: yup.string().email().required("Обьязательное поле!"),
  usercity: yup.string().required("Обьязательное поле!"),
});

const mockUser = {
  mail: "vasya@mail.com",
  phone_number: "1234567",
  user_id: 1,
  name: "Vasya Petrov",
  reg_date: new Date().toISOString,
  city: "Andijan",
};

export const RegistrationPage = () => {
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
      useremail: "",
      usercity: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useTypedSelector((state) => state.userSlice.user);

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    dispatch(changeUser(mockUser));
  };

  useEffect(() => {
    console.log("USER: ", user);

    if (user?.user_id) {
      navigate("/profile");
    }
  }, [user]);
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
                isError={errors.username ? true : false}
                type="tel"
                placeholder="Имя и фамилия"
                errorMessage={errors.username?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.useremail ? true : false}
                type="tel"
                placeholder="Почта"
                errorMessage={errors.useremail?.message}
                {...field}
              />
            )}
          />
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
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userpassword ? true : false}
                type="password"
                placeholder="Пароль"
                errorMessage={errors.userpassword?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="usercity"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.usercity ? true : false}
                type="string"
                placeholder="Город"
                errorMessage={errors.usercity?.message}
                {...field}
              />
            )}
          />
          <Button
            disabled={!!Object.keys(errors).length}
            type="submit"
            isPrimary
            buttonText="Зарегистрироваться"
          />
        </form>
        <LoginInfo />
      </StyledLoginPage>
    </Container>
  );
};
