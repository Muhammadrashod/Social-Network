import styled from "styled-components";

export const StyledEnter = styled.div`
  p {
    margin-bottom: 30px;
  }

  .icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .reg__link {
      flex: 0 0 58px;
      transition: 200ms;

      &:hover {
        scale: 1.1;
      }

      &:active {
        scale: 0.9;
        transition: 100ms;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .icon {
      border: 1px solid red;
      width: 100%;
      height: 100%;
    }
  }

`