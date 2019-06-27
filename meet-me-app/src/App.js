import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Component} from 'react';
import Questionnaire from './Questionnaire'
import Table from './Table.js'

import Map from './Map.js';

import './App.css';

function App() {

    let map = new Map();
    let qs = new Questionnaire();
    let table = new Table();
    return (
        //map.render()
        qs.render()
        //table.render()
    );
}

export default App;
