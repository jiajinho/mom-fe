import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import useResponsive from 'hooks/useResponsive';

import 'react-datepicker/dist/react-datepicker.css';
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Root = () => {
  useResponsive();

  return (<App />);
}

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
