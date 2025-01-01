import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pages1 from './Pages/Page1/Pages1';
import Pages2 from './Pages/Page2/Pages2';
import Pages3 from './Pages/Page3/Pages3';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Pages1 /> */}
    {/* <Pages2 /> */}
    <Pages3 />

  </React.StrictMode>
);

