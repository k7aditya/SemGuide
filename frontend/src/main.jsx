import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AuthProvider } from 'src/context/authContext';

import AppWrapper from './AppWrapper'; // Adjust the import path as necessary

// import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <AuthProvider>
          <AppWrapper />
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
