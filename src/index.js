import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import * as theme from '#config/theme';

import Root from './components/Root';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arimo', sans-serif;
    font-weight: 400;
  }
`;

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Root />
  </ThemeProvider>,
  document.getElementById('app')
);
