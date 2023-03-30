import { useEffect, useState } from "react"
import { weatherSnapshot, parsedData, zipData, cityObj } from "../interfaces/interface"
import SplashPage from "../SplashPage/SplashPage"
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay"

import {cityIdObj} from "../../city_code_bank/us_cities.js"

const Pilot: React.FC = () =>{

    const [parsedDataObj, setParsedDataObj] = useState<parsedData | null>(null)
    const [zipDataObj, setZipDataObj] = useState<zipData | null>(null)
    const typedCityIdObj: cityObj = cityIdObj

    useEffect(()=>{
        if (zipDataObj) {
            console.log(Object.values(zipDataObj.results)[0][0])
            const cityCodeKey = `${Object.values(zipDataObj.results)[0][0].state_code},${Object.values(zipDataObj.results)[0][0].city}`
            fetchWeather(String(typedCityIdObj[cityCodeKey]))
        }
    }, [zipDataObj])

    const fetchWeather = async (cityCode: string) => {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityCode}&units="imperial"&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        if (res.ok) {
            const data = await res.json();
            setParsedDataObj(data)
            console.log(data)
        } else {
            console.log("error in fetchweather")
        }
    }

    return ( 
    <>
            {!parsedDataObj && <SplashPage zipDataObj={zipDataObj} setZipDataObj={setZipDataObj } />}
            {parsedDataObj && (<WeatherDisplay parsedDataObj={parsedDataObj} setParsedDataObj={setParsedDataObj} />)}
    </> 
    )
} 


export default Pilot