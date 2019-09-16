import React from 'react';
import ReactDOM from 'react-dom';

// la ruta empieza sin ./ porque es un archivo de npm
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import Badge from './components/Badge'


const container = document.getElementById('app');

// no olvidar los < /> para transformar el 
// componente en elemento
ReactDOM.render(
    <Badge 
        firstName="Jose" 
        lastName="Tuzin" 
        avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
        jobTitle="Frontend Engineer" 
        twitter="sparragus" 
    />, 
    container);
