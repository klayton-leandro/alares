import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;

  button {
    all: unset;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 440px;
    height: 50px;

    border-radius: 14px;
    padding: 5px 25px 5px 25px;

    background: ${({ theme }) => theme.colors.primary};

    font-weight: 500 bold;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.White};

    cursor: pointer;
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
