import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Component/Navbar"
import { Shopcontextprovider } from './Context/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Shopcontextprovider>
  <BrowserRouter>
  <Navbar/>
  <App></App>
  </BrowserRouter>
  </Shopcontextprovider>
  </>
);

reportWebVitals();
