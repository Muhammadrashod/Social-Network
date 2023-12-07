import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { RegistrationInfo } from "../../components/UI/RegistartionInfo/ReagistartionInfo";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/slices/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useLoginUserMutation } from "../../store/API/authApi";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useTypedSelector((state) => state.userSlice.user);

  const [loginUser, { data: userData }] = useLoginUserMutation();

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginUser({ email: data.useremail, password: data.userpassword });
    dispatch(changeUser(data));
  };

  useEffect(() => {
    // console.log("USER: ", user);

    if (userData?.user_id) {
      navigate("/profile");
    }
  }, [userData, navigate]);

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.useremail ? true : false}
                errorMessage={errors.useremail?.message}
                type="tel"
                placeholder="Почта"
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
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Button
            disabled={!!Object.keys(errors).length}
            isPrimary
            type="submit"
            buttonText="Войти"
          />
        </form>
        <StyledLink to="/" linkText="Забыли пароль?" />
        <RegistrationInfo
          question="У вас нет аккаунта?"
          linkLabel="Зарегистрироваться"
          linkURL="/registration"
        />
      </StyledLoginPage>
    </Container>
  );
};
