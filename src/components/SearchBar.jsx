import React, {useState} from 'react';
import s from './styles/css/searchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  const [city, setCity] = useState('');

  return (
    <div className={s.navBar}>
      <div className={s.searchBar}>
        <form onSubmit={(e) => {
          e.preventDefault();
          props.onSearch(city);
          e.target[0].value = '';
        }}>
        <input type="search" placeholder='Ingresa una ciudad..' className={s.input} onChange={(e) => {
          setCity(e.target.value);
        }}/>
        <input className={s.btnSearch} type='submit' value='Buscar'></input>
        </form>
      </div>
    </div>
  );
};