import React from "react";

const FriendsBlock = () => {
  return (
    <div className="FriendsBlock">
      <div className="Friends__title">
        <h2>Друзья</h2>
        <span className="count">130</span>
      </div>
      <div className="Friends__wrapper">
        <div className="friend">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="Friend" />
          <span className="friend__name">Александр</span>
        </div>
        <div className="friend">
          <img src="./img/users/sofia-kodra.jpeg" alt="Friend" />
          <span className="friend__name">Софья</span>
        </div>
        <div className="friend">
          <img src="./img/users/andrey-kashirskiy.jpeg" alt="Friend" />
          <span className="friend__name">Андрей</span>
        </div>
        <div className="friend">
          <img src="./img/users/darya-gertner.jpeg" alt="Friend" />
          <span className="friend__name">Дарья</span>
        </div>
        <div className="friend">
          <img src="./img/users/denis-frolov.jpeg" alt="Friend" />
          <span className="friend__name">Денис</span>
        </div>
        <div className="friend">
          <img src="./img/users/mark-krahmalev.jpeg" alt="Friend" />
          <span className="friend__name">Марк</span>
        </div>
        <div className="friend">
          <img src="./img/users/katarina-fisher.jpeg" alt="Friend" />
          <span className="friend__name">Катарина</span>
        </div>
        <div className="friend">
          <img src="./img/users/viktoria.jpeg" alt="Friend" />
          <span className="friend__name">Виктория</span>
        </div>
        <div className="friend">
          <img src="./img/users/gleb.jpeg" alt="Friend" />
          <span className="friend__name">Глеб</span>
        </div>
      </div>
    </div>
  );
};

export default FriendsBlock;
