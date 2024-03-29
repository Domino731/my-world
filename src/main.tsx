import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles/reset.scss";
import "./modules/cyberpunk/variables.scss";
import {App} from "./modules/app";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
