import React from 'react';
import {ThemeProvider} from 'styled-components/native';

const LightTheme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ecf0f1',
    text: '#2c3e50',
  },
  fonts: {
    main: 'Arial',
    bold: 'Arial-BoldMT',
  },
};

const DarkTheme = {
  colors: {
    primary: '#1abc9c',
    secondary: '#9b59b6',
    background: '#34495e',
    text: '#ecf0f1',
  },
  fonts: {
    main: 'Arial',
    bold: 'Arial-BoldMT',
  },
};

const SwitchTheme = ({children, theme}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export {LightTheme, DarkTheme, SwitchTheme};
