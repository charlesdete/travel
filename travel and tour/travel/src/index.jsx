import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>);