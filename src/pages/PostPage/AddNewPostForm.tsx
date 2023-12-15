import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import {
  PostFormBox,
  PostFormFooter,
  PostFormContent,
  PostFormHeader,
} from "./PostForm.style";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { useAddNewPostMutation } from "../../store/API/postApi";
import { useUserId } from "../../hooks/useUserId";

type AddNewPostFormProps = {
  isOpen: boolean;
  onCloseModal: () => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddNewPostFormSchema = yup.object({
  mainText: yup.string().required("Это Обьязательное поле"),
});

export const AddNewPostForm = ({ isOpen }: AddNewPostFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddNewPostFormSchema),
    defaultValues: {
      mainText: "",
    },
  });

  const userId = useUserId();

  const [addNewPost, { data: postData }] = useAddNewPostMutation();

  const handleAddPostFormSubmit: SubmitHandler<{ mainText: string }> = (
    formData
  ) => {
    if (formData) {
      const payload = {
        user_id: Number(userId),
        main_text: formData.mainText,
      };

      addNewPost(payload);
    }
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <PostFormBox onSubmit={handleSubmit(handleAddPostFormSubmit)}>
        <PostFormHeader>
          <Heading headingType="h3" headingText="Добавить новый пост"></Heading>
        </PostFormHeader>
        <PostFormContent>
          <Controller
            name="mainText"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.mainText ? true : false}
                errorMessage={errors.mainText?.message}
                type="text"
                placeholder="Текст"
                {...field}
              />
            )}
          />{" "}
        </PostFormContent>
        <PostFormFooter>
          <Button type="submit" buttonText="Сохранить" isPrimary />
          <Button buttonText="Отменить" isPrimary />
        </PostFormFooter>
      </PostFormBox>
    </Modal>
  );
};
