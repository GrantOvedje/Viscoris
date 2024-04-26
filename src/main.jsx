import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import Supplements from './products/supplements.jsx';
import Coffee from './products/coffee.jsx';
import Contact from './contact.jsx';
import About from './about.jsx';
import FactorX from './products/fuel-factor-x.jsx';
import Others from './products/others.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
  },

  {
    path:"/products/supplement",
    element: <Supplements />,
  },
  
  {
    path:"/products/coffee",
    element: <Coffee />,
  },

  {
    path:"/products/fuel-factor-x",
    element: <FactorX />,
  },

  {
    path:"/products/other-things",
    element: <Others />
  },

  {
    path:"/about",
    element: <About />,
  },

  {
    path:"/contacts",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
