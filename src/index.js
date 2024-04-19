import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ParentDiv from './components/ParentDiv';
const centerDivStyle = {
  display: 'flex',
  justifyContent:'center',
  alignitems:'center',
  padding: 30,
  
};
function PercentCompletetoBadge() {

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div style={centerDivStyle}>
    <ParentDiv/>
    </div>
 
  </React.StrictMode>
);

