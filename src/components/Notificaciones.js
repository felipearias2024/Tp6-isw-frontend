import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mapa from '../assets/images/mapa-centro.png'

import './Notificaciones.css';

const Notificaciones = () => {

  return (
    <div className="notificaciones-container">
      <div className="header">
        <h1>Transportista</h1>
      </div>
      <h2>Mapa</h2>
      <div className="map-container">
        <img src={Mapa}/>
      </div>
    </div>
  );
};

export default Notificaciones;
