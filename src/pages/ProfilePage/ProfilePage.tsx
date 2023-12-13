import React from "react";
import "./ProfilePage.scss";
import { Header } from "../../components/UI/Header/Header";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Container } from "../../components/UI/Container/Container.style";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/List/List";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import WhatsNew from "../../components/WhatsNew/WhatsNew";
import UserPosts from "../../components/Post/UserPosts";
import LikedMarked from "../../components/Post/LikedMarked";
import RepostLikedMarked from "../../components/Post/RepostLikedMarked";
import MusicBlock from "../../components/MusicBlock/MusicBlock";
import Bio from "../../components/Bio/Bio";
import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";

export const ProfilePage = () => {
  const user = useTypedSelector((state) => state.userSlice.user);

  return (
    <Container>
      <Header />
      <div className="ProfilePage">
        <aside className="LeftSide">
          <Navbar />
          <List />
        </aside>
        <ProfileHeader />
        <main className="Main">
          <WhatsNew />
          <UserPosts />
          <LikedMarked />
          <RepostLikedMarked />
        </main>
        <aside className="RightSide">
          <Bio />
          <FriendsBlock />
          <MusicBlock />
        </aside>
      </div>
    </Container>
  );
};
