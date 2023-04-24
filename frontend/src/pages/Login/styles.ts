import styled from "styled-components";

export const Container = styled.div`
  @media(max-width: 800px){
      justify-content: center;
      padding-bottom: 20px;
      margin-bottom: 80px;
      
  }

  display: flex;
  align-items: stretch;

  aside {
    @media(max-width: 800px){
       display: none;
    }

    flex: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.White};
    min-height: 100vh;
  }

  main {
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.bgDefault};
    width: 562px;
    @media(min-width: 801px){
      margin-bottom: 80px;     
    }

    button {
      :nth-child(1) {
        @media(max-width: 800px){
          width: calc(100% - 40px);
          margin-left: 20px;          
        }

        width: calc(100% - 140px);
        margin-top: 20px;
        margin-left: 70px;
      }
    }

    nav {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      margin-left: 80px;
      margin-top: 130px;
      gap: 50px;

      strong {
        font-weight: 800;
        font-size: 40px;
        line-height: 18px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
      }
    }
    form {
      @media(max-width: 800px){
          padding: 20px;
      }

      margin-top: 20px;
      padding-left: 70px;
      padding-right: 70px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      a {
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;
