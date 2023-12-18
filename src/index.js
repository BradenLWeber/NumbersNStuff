import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { MathJaxContext } from 'better-react-mathjax';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterNavigation from './router-navigation';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 1,
});

const config = {
  loader: { load: ['[tex]/html'] },
  tex: {
    packages: { '[+]': ['html'] },
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MathJaxContext version={3} config={config}>
        <RouterNavigation />
      </MathJaxContext>
    </ThemeProvider>
  </React.StrictMode>,
);
