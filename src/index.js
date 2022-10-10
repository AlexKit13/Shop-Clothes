import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./components/App/App";
import {BrowserRouter} from "react-router-dom";
import GlobalStyles from "./components/globalStyles";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyles />
        <BrowserRouter>
           <App />
        </BrowserRouter>
    </>
);