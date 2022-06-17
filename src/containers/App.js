import React, {useState} from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Cards from '../components/Cards';
import About from '../components/About';
import Nav from '../components/Nav';
import City from '../components/City';

function App() {
  const [cities, setCities] = useState([]);
  

  function onSearch(ciudad) {
    let exist = false;
    cities.forEach((c) => {
      if(c.name === ciudad && !exist){
        exist = true;
      }
    })
    if(!exist){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_APIKEY}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
        if(recurso.main !== undefined){
            const ciudad = {
              actual:  Math.round(recurso.main.temp),
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
          } else {
            alert("Ciudad no encontrada");
          }
        });
      }else{
        alert('La ciudad ya se encuentra en pantalla.');
      }
  }

    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return null;
      }
    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    const root = (
      <div className='app'>
        <Router>
          <Nav onSearch={onSearch} />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route
              exact
              path='/ciudad/:ciudadId'
              render={({match}) => <City city={onFilter(match.params.ciudadId)}/>}
            />
            <Route path="/">
              <Cards cities={cities} onClose={onClose}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );

  return root;

    // <div className="App">
    //     <Nav onSearch={onSearch}/>
    //     {/* <About/> */}
    //     {/* <Cards cities={cities} onClose={onClose}/> */}
    // </div>
}

export default App;
