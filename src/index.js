import React from 'react';
// import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);

root.render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-fcfzyp26l57rjf2r.us.auth0.com"
     clientId="ZXpl3b1CQsZVsDInTpNJ43aUFEumcjoJ"
     authorizationParams={{
     redirect_uri: window.location.origin
     }}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
