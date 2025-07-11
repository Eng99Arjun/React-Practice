import { useEffect, useState } from "react"

export default function App() {

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [weather, setWeather] = useState()

  useEffect(() => {
    if (!lat || !long) return;
    
    const fetchWeather = async() => {
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        const data = await res.json();
        setWeather(data)
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    }
    fetchWeather();
  }, [lat, long])


  return(
    <>
      <div>
        <input 
          type="Number"
          value={lat}
          placeholder="Enter Latitude"
          onChange={(e) => {
            setLat(e.target.value)
          }}
         />
      </div>
      <div>
        <input 
          type="Number"
          value={long}
          placeholder="Enter Longitude"
          onChange={(e) => {
            setLong(e.target.value)
          }}
         />
      </div>

      <div>
        {weather ? (
          <>
            <h3>{weather.current.time}</h3>
            <h3>{weather.current.interval} {weather.current_units.interval} </h3>
            <h3>{weather.current.temperature_2m} {weather.current_units.temperature_2m} </h3>
            <h3>{weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m} </h3>
          </>
        ) : (
          <p>Enter latitude and longitude to see weather data</p>
        )}
      </div>

     
    </>
  )
}