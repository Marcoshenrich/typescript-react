

// 

import { useEffect, useState } from "react";

const Splash = () => {

    type data = any

    interface parsedData {
        city: {
            country: string
            name: string
            sunrise: number
            sunset: number
        }
        list: weatherSnapshot[]
    }

    interface weatherSnapshot {
       clouds: number
       main: {
        feels_like: number
        temp_max: number
        temp_min: number
       }
    }



    const [parsedData, setParsedData] = useState(null)

    const fetchWeather = async () => {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        if (res.ok) {
            const data = await res.json();
            setParsedData(data)
            console.log(data)
        } else {
            console.log("error in fetchweather")
        }
    }

    useEffect(()=>{
        fetchWeather()
    },[])

    return (
        <div>
            hello
            {data && (parsedData.city.name)}
        </div>
    );
}

export default Splash;
