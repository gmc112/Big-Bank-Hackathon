import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Component} from 'react';
import Map from './Map.js';
import SideNavPage from './sidebar.js'

import './App.css';

function App() {
  let map = new Map();

  return (
    <SideNavPage  />,
    map.render()
  );
}

export default App;
