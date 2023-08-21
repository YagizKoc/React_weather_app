import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, ListGroup, ListGroupItem } from "reactstrap";




function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6bb3dea5d729140b742371594248e1aa`;


  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  
  

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter City"
          type="text"
        />
      </div>
      <div className="mainTemp">
        
        <div className="top">
         
          <div>
            <p className="p2">{data.name}</p>
          </div>
          <div>
            {data.main ? <h1>{data.main.temp} °C </h1> 
            : null}
          </div>
          <div>
            {data.weather? <p>{data.weather[0].main}</p> 
            : null}
            
          </div>
       

        </div>
  
        {data.name != undefined &&

        <div className="extras">
          <div>
            {data.main ? <p className="bold">{data.main.feels_like} °C </p> 
            : null }
            <p>Feels Like</p>
          </div>
          <div >
            {data.main ? <p className="bold">{data.main.humidity} % </p>
            : null }
            <p>Humidity</p>
          </div>
          <div>
            {data.wind ? <p className="bold">{data.wind.speed} KMH</p> 
            : null}
            <p>Wind Speed</p>
            
          </div>
          
          
        </div>
        
          }
          


  

          
          
      </div>
        
    </div>
  );
}

export default App;

