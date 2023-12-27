import React, { useEffect, useState, useCallback } from "react";
import History from "../../components/History/History";
import { Post } from "../../components/Post/Post";
import { Container } from "../../components/UI/Container/Container.style";
import { Header } from "../../components/UI/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import WhatsNew from "../../components/WhatsNew/WhatsNew";
import { useLazyGetPostListQuery } from "../../store/API/postApi";
import "./MainPage.scss";
import List from "../../components/List/List";
import RightList from "../../components/List/RightList";
import MusicBlock from "../../components/MusicBlock/MusicBlock";
import { FullScreenLoader } from "../../components/UI/FullscreenLoader/FullScreenLoader";
import { EditPostForm } from "../PostPage/EditPostForm";
import type { PostItem } from "../../store/API/postApi";

export const MainPage = () => {
  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetPostListQuery();

  const [selectorPost, setSelectedPost] = useState<PostItem | null>();
  const [openEditPost, setOpenEditPost] = useState<boolean>(false);

  useEffect(() => {
    fetchTrigger(null);
    console.log("data: ", data);
  }, [fetchTrigger, data]);

  const onEditModalClose = useCallback(() => {
    setSelectedPost(null);
    setOpenEditPost(false);
  }, []);

  const handleEditPostClick = useCallback((post: PostItem) => {
    setSelectedPost(post);
    setOpenEditPost(true);
  }, []);

  const handleEditPostSuccess = useCallback(() => {
    fetchTrigger(null);
    onEditModalClose();
  }, []);

  return (
    <Container>
      <Header />
      {isLoading && <FullScreenLoader />}
      <div className="MainPage">
        <aside className="LeftSide">
          <Navbar />
          <List />
        </aside>
        <main className="Main">
          <WhatsNew onNewPostAdded={() => fetchTrigger(null)} />
          <History />
          {isError && <h1>Ошибка:(</h1>}
          {!!data?.message.length &&
            [...data.message]
              .reverse()
              .map((post) => (
                <Post
                  key={post.id}
                  post={post}
                  onPostDelete={() => fetchTrigger(null)}
                  onPostEditClick={() => handleEditPostClick(post)}
                />
              ))}
        </main>
        {selectorPost && (
          <EditPostForm
            isOpen={openEditPost}
            post={selectorPost}
            onCloseModal={onEditModalClose}
            onEditPostSuccess={handleEditPostSuccess}
          />
        )}
        <aside className="RightSide">
          <RightList />
          <MusicBlock />
        </aside>
      </div>
    </Container>
  );
};
