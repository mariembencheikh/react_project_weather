const API_KEY='8b569cf36b0654526457a131de3ffbf3';
const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getData = async(location,units = "metric")=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=${units}`

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data)=>data);
    console.log(data);

    const {
        weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country },
        name,
      } = data;
    
      const { description, icon } = weather[0];
    
      return {
        description,
        iconURL: makeIconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
      };
    };

export {getData};