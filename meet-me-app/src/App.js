import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Component} from 'react';
import Map from './Map.js';

import './App.css';

function App() {
  let map = new Map();

  return (
    map.render()
  );
}

export default App;
