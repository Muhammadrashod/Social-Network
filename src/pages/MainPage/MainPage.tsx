import React, { useEffect } from "react";
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

export const MainPage = () => {
  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetPostListQuery();

  useEffect(() => {
    fetchTrigger(null);
    console.log("data: ", data);
  }, [fetchTrigger, data]);

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
                  postText={post.main_text}
                  regDate={post.reg_date}
                  userName={post.user_fk.name}
                  photos={post.photos}
                  postId={post.id}
                  onPostDelete={() => fetchTrigger(null)}
                />
              ))}
        </main>
        <aside className="RightSide">
          <RightList />
          <MusicBlock />
        </aside>
      </div>
    </Container>
  );
};
