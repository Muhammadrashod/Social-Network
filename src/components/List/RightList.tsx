import React from "react";

const RightList = () => {
  return (
    <div className="List">
      <div className="List__title">
        <h2>Близкие друзья</h2>
        <span className="count">123</span>
      </div>
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Александр Майков</p>
          <p className="secondary__text _online">Онлайн</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Александр Майков</p>
          <p className="secondary__text _online">Онлайн</p>
        </div>
        <span className="Badge">3</span>
      </div>
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <p className="main__text">Александр Майков</p>
          <p className="secondary__text _online">Онлайн</p>
        </div>
        <span className="Badge">3</span>
      </div>
    </div>
  );
};

export default RightList;
