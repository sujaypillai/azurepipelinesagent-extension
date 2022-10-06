import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { DockerMuiThemeProvider } from '@docker/docker-mui-theme';
import { App } from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DockerMuiThemeProvider>
      <CssBaseline />
      <App />
    </DockerMuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
