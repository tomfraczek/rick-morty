import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AppProviders } from './providers/app-provider';

ReactDOM.render(
  <AppProviders>
      <App />
  </AppProviders>,
  document.getElementById('root')
);
