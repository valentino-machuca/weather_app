import React from "react";
import {Link} from 'react-router-dom';
import s from './styles/css/City.module.css'

export default function Ciudad({city}) {
    console.log(city);
    return (
        <div className={s.ciudad}>
            <div className={s.city}>
                <Link to='/' className={s.link}><h2>⇐ {city.name}</h2></Link>
                <div className={s.container}>
                    <div className={s.info}>
                        <div className={s.data}><h4 className={s.title}>Temperatura</h4>{city.temp} ºC</div>
                        <div className={s.data}><h4 className={s.title}>Clima</h4>{city.weather}</div>
                        <div className={s.data}><h4 className={s.title}>Viento</h4>{city.wind} km/h</div>
                        <div className={s.data}><h4 className={s.title}>Cantidad de nubes</h4>{city.clouds}%</div>
                        <div className={s.data}><h4 className={s.title}>Latitud</h4>{city.latitud}º</div>
                        <div className={s.data}><h4 className={s.title}>Longitud</h4>{city.longitud}º</div>
                    </div>
                    <div className={s.image}>
                        <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="temp-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}