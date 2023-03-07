import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import StoreContext from './StoreContext';

import routes from './routes';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => {
  const [user, setUser] = useState(null)

  return (
    <StoreContext.Provider value={{user, setUser}}>
      <BrowserRouter>

        <Header />

        <main className='container'>
          <Routes>
            {routes.map(({path, element}) => <Route key={path} path={path} element={element} />)}
          </Routes>
        </main>

        <Footer />

      </BrowserRouter>
    </StoreContext.Provider>
  )
}

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);