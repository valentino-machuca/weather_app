import React from 'react';
import s from './styles/css/About.module.css'
import svg from './img/rain-about.svg'

export default function About(props) {
  // acá va tu código
  return (
    <div className={s.aboutData}>
        <div className={s.about}>
            <h3>Bienvenidos!</h3>
            <span>
                Aquí podrás encontrar información sobre el clima de cualquier ciudad del mundo. Está app ha sido creada con React y se encuentra conectada a <span className={s.url}>api.openweathermap.org</span>
            </span>
        </div>
        <div className={s.image}>
            <img src={svg} alt='svg-rain'/>
            <h3>Weather App</h3>
            <p>By Valentino Machuca</p>
        </div>
    </div>
  );
};