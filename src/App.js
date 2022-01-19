import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./components/Paginas";
import 'boxicons';
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from './components/Carrito';

function App() {
    return ( 
        <DataProvider>
        <div className = "App">
        <Router>
        <Header />
        <Carrito />
        <Paginas />
        </Router>
        </div>
        </DataProvider>
    );
}

export default App;