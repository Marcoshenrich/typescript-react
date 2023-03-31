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
            fetchSolar()
        }
    }, [zipDataObj])

    // https://heliene.com/wp-content/uploads/documents/SpecSheets/HSPE_144HC_M10_TPC_SL_Bifacial_Rev.00.pdf
    // https://pvwatts.nrel.gov/pvwatts.php
    
    // Daily Power Output = (GHI * Area * Efficiency * PRatio)

    // eff: 22.44
    // area: 4050sq

    // PRatio = 1 + (Pmax TC * (T - 25))

    // Where:
    // Pmax TC = Temperature Coefficient of Power in % /°C

    // T = Temperature of the solar panel in °C
    // Temperature Coefficient of Pmax - 0.30 % /°C

    //  Solar power from a single panel in a solar panel system typically produces about 2 kWh per day.


    //https://electricityplans.com/kwh-kilowatt-hour-can-power/

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

    const fetchSolar = async () => {
        const res = await fetch(`https://demo.openweathermap.org/energy/1.0/solar/data?lat=37.7574&lon=-122.2572&date=2023-03-31&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        if (res.ok) {
            const data = await res.json();
            console.log(data)
        } else {
            console.log("error in fetchSolar")
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