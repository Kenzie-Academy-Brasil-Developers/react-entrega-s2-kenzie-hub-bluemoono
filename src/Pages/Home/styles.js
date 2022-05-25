import styled from "styled-components";

export const Container = styled.div`
  margin: 50px auto;
  width: 100%;
  max-width: 1000px;
  margin: 15px auto;
  height: 100vh;

  hr {
    border-color: var(--grey-2);
  }

  @media (max-width: 400px) {
    margin: 50px auto;
    width: 350px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  @media (width: 400px) {
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
      text-align: left;
    }
  }
`;

export const Logo = styled.h3`
  color: var(--primary);
  width: 800px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  padding: 10px 20px;
  background-color: var(--grey-3);

  h2,
  p {
    padding: 5px 0;
  }

  Button {
    text-align: left;
    padding-left: 10px;
  }
`;
