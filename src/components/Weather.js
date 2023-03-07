import { useState } from "react"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`


const WeatherLayout = ({tempInfo}) => {
  const {temp, temp_min, temp_max, feels_like, pressure, humidity} = tempInfo

  return (
  <div className="row mt-3">
    <div className="col border rounded">
      <div className="row">
        <div className="col-12 text-center">
          <p className="fs-1">{temp}</p>
        </div>
        <div className="col">
          <p className="fs-4">Min - <span>{temp_min}</span></p>
        </div>
        <div className="col">
        <p className="fs-4">Max - <span>{temp_max}</span></p>
        </div>
      </div>
    </div>
    <div className="col border rounded">
      <div className="row flex-column">
        <div className="col">
          <p className="fs-5">
            Feels Like - 
            <span>{feels_like}</span>
          </p>
        </div>
        <div className="col">
          <p className="fs-5">
            Pressure - 
            <span>{pressure}</span>
          </p>
        </div>
        <div className="col">
          <p className="fs-5">
            Humidity - 
            <span>{humidity}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)}


const NoCityFound = () => (
  <div className="row mt-3">
    <div className="col">
      City not found.
    </div>
  </div>
)


const Weather = () => {
  const [cityName, setCityName] = useState('')

  const [tempInfo, setTempInfo] = useState({})
  
  const getWeather = async () => {
    try {
      const response = await (await fetch(WEATHER_API + cityName)).json()

      if(response.cod === "404") {
        setTempInfo({})
        return
      }

      setTempInfo(response.main)

    } catch(e) {
      console.log('error occurred', e)
    }
  }
  
  return (
    <>
      <div className="row g-2">
        <div className="col">
          <input type="text" className="form-control" value={cityName} onChange={(e) => setCityName(e.target.value)} />
        </div>

        <div className="col-auto">
          <button className="btn btn-primary" onClick={() => getWeather()}>Search</button>
        </div>
      </div>

      {
        Object.keys(tempInfo).length
          ? <WeatherLayout tempInfo={tempInfo} />
          : <NoCityFound />
      }
    </>
  )
}

export default Weather