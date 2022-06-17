import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import s from './styles/css/Nav.module.css'

function Nav({onSearch}) {
  return (
    <div className={s.nav}>
      <div className={s.navlogo}>
        <Link to='/' className={s.link}>
          <div className={s.logo}><h1>Weather App</h1></div>
        </Link>
        <Link to='/about' className={s.link}>
          <span>About</span>
        </Link>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
