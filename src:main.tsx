import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { EditorProvider } from './context/EditorContext';
import { ADMIN_VISUAL_EDITOR_CORE } from './components/AdminVisualEditorCore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EditorProvider>
      <App />
      <ADMIN_VISUAL_EDITOR_CORE />
    </EditorProvider>
  </React.StrictMode>
);