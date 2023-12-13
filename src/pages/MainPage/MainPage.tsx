import React, { useEffect } from "react";
import "./MainPage.scss";
import { Header } from "../../components/UI/Header/Header";
import { Container } from "../../components/UI/Container/Container.style";
import { Post } from "../../components/Post/Post";
import { useLazyGetPostListQuery } from "../../store/API/postApi";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/List/List";
import WhatsNew from "../../components/WhatsNew/WhatsNew";
import History from "../../components/History/History";
import RightList from "../../components/List/RightList";
import MusicBlock from "../../components/MusicBlock/MusicBlock";

export const MainPage = () => {
  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetPostListQuery();

  useEffect(() => {
    fetchTrigger(null);
  }, [fetchTrigger]);

  return (
    <Container>
      <Header />
      <div className="MainPage">
        <aside className="LeftSide">
          <Navbar />
          <List />
        </aside>
        <main className="Main">
          <WhatsNew />
          <History />

          {data?.message.length &&
            data.message.map((post) => (
              <Post
                postText={post.main_text}
                regDate={post.reg_date}
                userName={post.user_fk.name}
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
