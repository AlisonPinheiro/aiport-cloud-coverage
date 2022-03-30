import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap');
  }

  :root {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    background-color:#000 ;
  }

  html,
  body {
    z-index: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  figure,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  section,
  fieldset,
  li {
    display: block;
  }

  main{
    display:flex ;
    height: calc(100vh - 60px);
    @media (max-width:1024px){
      flex-direction: column ;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 500;
  }

  strong {
    font-weight: bold;
  }

  a,
  button {
    color: inherit;
    font-size: inherit;
    text-transform: inherit;
  }

  a {
    text-decoration: none;
  }

  button {
    overflow: visible;
    border: 0;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    background: none;
    cursor: pointer;
  }

  button,
  input,
  textarea,
  select {
    -webkit-appearance: none;
    -moz-appearance:none;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 0;

    &[data-src],
    &[data-srcset] {
      display: block;
      min-height: 1px;
    }

    &:not([src]) {
      visibility: hidden;
    }

    &[height='0'][width='0'] {
      display: none !important;
    }
  }

  a,
  img {
    display: block;

    &.inline {
      display: inline;
    }
  }

  input,
  textarea,
  select {
    font-family: 'Roboto', sans-serif;
  }

  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  :focus {
    outline: 0;
  }

  [type="search"]{
    &::-webkit-search-cancel-button{
      appearance: none;
      display: none;
    }
  }

`;

export default GlobalStyle;
