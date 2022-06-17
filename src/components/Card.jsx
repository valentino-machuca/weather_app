import React from 'react';
import {Link} from 'react-router-dom';
import s from './styles/css/Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.card}>
      <button className={s.btn} onClick={()=>{
        props.onClose(props.id);
      }}>X</button>
        <div className={s.dataW}>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="temp-img" className={s.temp_img}/>
          <Link to={`/ciudad/${props.id}`} className={s.link}>
            <h2>{props.name}</h2>
          </Link>
          <div className={s.actual}>{props.actual}°</div>
          <div className={s.temp}>
            <div className={s.min}>
              <span className={s.temps}>Min</span>
              <span>{props.min}°</span>
            </div>
            <div className={s.max}>
              <span className={s.temps}>Max</span>
              <span>{props.max}°</span>
            </div>
          </div>
      </div>
    </div>
  );
};