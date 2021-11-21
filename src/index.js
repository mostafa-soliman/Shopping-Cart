import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import ShoppingCard from './component/shoppingCard';
import App from './component/app';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

reactDom.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.querySelector("#root")
    );

