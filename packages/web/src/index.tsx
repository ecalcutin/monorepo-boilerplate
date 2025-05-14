import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App';

// This will run in the browser and hydrate the server-rendered HTML
if (typeof window !== 'undefined') {
  hydrateRoot(
    document.getElementById('root')!,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

// Export for SSR
export { App };
