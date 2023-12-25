import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container.style";
import { useLazyGetPostByIdQuery } from "../../store/API/postApi";
import { Post } from "../../components/Post/Post";

export const PostPage = () => {
  const { postId } = useParams();
  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetPostByIdQuery();

  useEffect(() => {
    if (postId) {
      //вызов запроса
      fetchTrigger(postId);
    }
  }, [postId]);

  return (
    <Container>
      {isError && <h1>Произошла Ошибка</h1>}
      {isLoading && <h1>Идет Загрузка...</h1>}
      {data && (
        <Post
          postText={data.message.main_text}
          userName={data.message.user_fk.name}
          regDate={data.message.reg_date}
          photos={data.message.photos}
          postId={postId as string}
        />
      )}
    </Container>
  );
};
