import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado a react-dom/client
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Usa createRoot en lugar de ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas que tu aplicación funcione sin conexión y cargue más rápido,
// puedes cambiar unregister() a register(). Nota: esto tiene algunas implicaciones.
// Aprende más sobre service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
