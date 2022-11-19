import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from '@aws-amplify/core';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
