import React from 'react';
import RecipeProvider from "./store/RecipeProvider";
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <RecipeProvider>
    <App />
  </RecipeProvider>
);
