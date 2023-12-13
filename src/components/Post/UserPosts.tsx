import React from "react";

const UserPosts = () => {
  return (
    <div className="UserPosts">
      <div className="UserPosts__controls">
        <div className="tabs">
          <div className="tab _no-select photos _active">
            <svg
              className="icon icon-photo"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="photo"
                d="M25 17.5V2.5C25 1.125 23.875 0 22.5 0H7.5C6.125 0 5 1.125 5 2.5V17.5C5 18.875 6.125 20 7.5 20H22.5C23.875 20 25 18.875 25 17.5ZM11.25 12.5L13.7875 15.8875L17.5 11.25L22.5 17.5H7.5L11.25 12.5ZM0 5V22.5C0 23.875 1.125 25 2.5 25H20V22.5H2.5V5H0Z"
              />
            </svg>

            <span>Фото</span>
          </div>
          <div className="tab _no-select videos">
            <svg
              className="icon icon-video"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="video"
                d="M13.8125 14.375L19 11.0625C19.3958 10.8125 19.5937 10.4583 19.5937 10C19.5937 9.54167 19.3958 9.1875 19 8.9375L13.8125 5.625C13.3958 5.33333 12.9687 5.3125 12.5312 5.5625C12.0937 5.8125 11.875 6.17708 11.875 6.65625V13.3437C11.875 13.8229 12.0937 14.1875 12.5312 14.4375C12.9687 14.6875 13.3958 14.6667 13.8125 14.375ZM7.5 20C6.8125 20 6.22375 19.755 5.73375 19.265C5.24375 18.775 4.99917 18.1867 5 17.5V2.5C5 1.8125 5.245 1.22375 5.735 0.733752C6.225 0.243752 6.81333 -0.000831211 7.5 2.12224e-06H22.5C23.1875 2.12224e-06 23.7762 0.245002 24.2662 0.735002C24.7562 1.225 25.0008 1.81333 25 2.5V17.5C25 18.1875 24.755 18.7762 24.265 19.2662C23.775 19.7562 23.1867 20.0008 22.5 20H7.5ZM2.5 25C1.8125 25 1.22375 24.755 0.733752 24.265C0.243752 23.775 -0.000831211 23.1867 2.12224e-06 22.5V6.25C2.12224e-06 5.89583 0.120002 5.59875 0.360002 5.35875C0.600002 5.11875 0.896669 4.99917 1.25 5C1.60417 5 1.90125 5.12 2.14125 5.36C2.38125 5.6 2.50083 5.89667 2.5 6.25V22.5H18.75C19.1042 22.5 19.4012 22.62 19.6412 22.86C19.8812 23.1 20.0008 23.3967 20 23.75C20 24.1042 19.88 24.4012 19.64 24.6412C19.4 24.8812 19.1033 25.0008 18.75 25H2.5Z"
              />
            </svg>
            <span>Видео</span>
          </div>
        </div>
        <div className="upload-media _no-select">
          <svg
            className="icon icon-upload"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <g>
              <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
            </g>
          </svg>
          <span>Загрузить фото</span>
        </div>
      </div>
      <div className="media-container">
        <img
          className="media__item"
          src="./img/users/arina-volkova.jpeg"
          alt="Post Item"
        />
        <img
          className="media__item"
          src="./img/post/user-photo-2.jpeg"
          alt="Post Item"
        />
        <img
          className="media__item"
          src="./img/post/user-photo-3.jpeg"
          alt="Post Item"
        />
        <img
          className="media__item"
          src="./img/post/user-photo-4.jpeg"
          alt="Post Item"
        />
        <img
          className="media__item"
          src="./img/post/user-photo-5.jpeg"
          alt="Post Item"
        />
        <img
          className="media__item"
          src="./img/post/user-photo-6.jpeg"
          alt="Post Item"
        />
      </div>
      <div className="show-all _no-select">
        <span>Показать все</span>
        <svg
          className="icon icon-show-all"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="arrow"
            d="M6 5.99999C5.8565 5.99999 5.71731 5.97708 5.58242 5.93128C5.44753 5.88548 5.33561 5.82441 5.24664 5.74808L0.295964 1.53435C0.0986543 1.36641 0 1.15267 0 0.893127C0 0.633586 0.0986543 0.419846 0.295964 0.251907C0.493273 0.0839689 0.744394 0 1.04933 0C1.35426 0 1.60538 0.0839689 1.80269 0.251907L6 3.82442L10.1973 0.251907C10.3946 0.0839689 10.6457 0 10.9507 0C11.2556 0 11.5067 0.0839689 11.704 0.251907C11.9013 0.419846 12 0.633586 12 0.893127C12 1.15267 11.9013 1.36641 11.704 1.53435L6.75336 5.74808C6.64574 5.83968 6.52915 5.90472 6.40359 5.94319C6.27803 5.98166 6.1435 6.0006 6 5.99999Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserPosts;
