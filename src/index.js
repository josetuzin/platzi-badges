import React from 'react';
import ReactDOM from 'react-dom';

// la ruta empieza sin ./ porque es un archivo de npm
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

//import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'


const container = document.getElementById('app');

// no olvidar los < /> para transformar el 
// componente en elemento
ReactDOM.render(
    <Badges/>, 
    container);
