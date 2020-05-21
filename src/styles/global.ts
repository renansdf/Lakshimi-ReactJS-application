import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: rgb(255,160,65);
    background: radial-gradient(circle, rgba(255,160,65,1) 0%, rgba(235,125,0,1) 100%);
    color: #68008D;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 300;
    font-style: italic;
  }

  button{
    cursor: pointer;
  }
`;
