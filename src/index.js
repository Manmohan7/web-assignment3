import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import routes from './routes';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import ThemeContext from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={'light'}>
      <BrowserRouter>
        <Header />

        <main className='container'>
          <Routes>
            {routes.map(({path, element}) => <Route key={path} path={path} element={element} />)}
          </Routes>
        </main>

        <Footer />

      </BrowserRouter>
    </ThemeContext.Provider>
  </React.StrictMode>
);