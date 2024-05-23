import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ParentDiv from './components/ParentDiv';
import BrainBadge from './components/BrainBadge';
import LungBadge from './components/LungBadge';
import HeartBadge from './components/HeartBadge';
import FootBadge from './components/FootBadge';
import HandBadge from './components/HandBadge';
import KidneyBadge from './components/KidneyBadge';
import LiverBadge from './components/LiverBadge';
import EarBadge from './components/EarBadge';
import EyeBadge from './components/EyeBadge';
import NoseBadge from './components/NoseBadge';
import LockBadge from './components/LockBadge';

const centerDivStyle = {
  display: 'flex',
  justifyContent:'center',
  alignitems:'center',
  padding: 30,
  
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div style={centerDivStyle}>
    <BrainBadge/>
    <LungBadge/>
    <HeartBadge/>
    <FootBadge/>
    <HandBadge/>
    <KidneyBadge/>
    <LiverBadge/>
    <EarBadge/>
    <EyeBadge/>
    <NoseBadge/>
    <LockBadge/>
    </div>
 
  </React.StrictMode>
);

