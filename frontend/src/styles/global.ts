import { createGlobalStyle } from "styled-components";

import 'tippy.js/dist/tippy.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  html,
  body {
    background-color: ${({ theme }) => theme.colors.bgDefault};
    font-family: "Mark Pro";
  }
  ul, 
  ol {  
    padding: 0;
    list-style-type: none;
    margin: 0;
  }

  input{        
    all: unset;  
  }
  button {
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
  }
  a {
    text-decoration: none;
    font-family: "Mark Pro";
  }
  img {
    display: block;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border-bottom:  1px solid ${({ theme }) => theme.colors.gray100};
    border-top: none;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .wrapper {
    @media(max-width: 800px){
        margin-bottom: 450px;

    }

    @media(min-width: 801px){
      /* min-width: 100vw; */
    }

    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
  }
  
  ul {
    margin: 0;
    padding: 0
  }

  li {
    margin: 0;
    padding: 0
  }

  
  .center-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export default GlobalStyle;