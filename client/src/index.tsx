import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root: HTMLElement | null = document?.getElementById('root');

if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  );
} else {
  console.error("Failed to find the 'root' element to mount the application.");
}
