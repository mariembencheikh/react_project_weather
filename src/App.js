

import hotBg from "./assets/hotBg.jpg";
import coldBg from "./assets/coldBg.jpg";
import Descriptions from "./components/description";
import { useEffect, useState } from "react";
import { getData} from "./weatherService";
import InputSearch from "./components/InputSearch";
import Temperature from "./components/Temperature";

function App() {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getData(city, units);
      setWeather(data);

      // dynamic bg
      const hotcold = units === "metric" ? 20:60;
      if (data.temp <= hotcold) setBg(coldBg);
      else setBg(hotBg);
    };
    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      setCity(e.currentTarget.value);
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            
            <InputSearch handleUnitsClick={handleUnitsClick} enterKeyPressed={enterKeyPressed} />
            <Temperature weather={weather} units={units}/>

            {/* bottom description */}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
