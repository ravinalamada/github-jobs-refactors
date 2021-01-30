import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Roboto', Helvetica, sans-serif;
        color: #334680;
        font-size: 16px;
        margin: 0;
        background: #F6F7FB;
        border-radius: 12px;
    }

    img {
      /* width: 100px; */
    }

    a {
      text-transform: none;
    }
`;
