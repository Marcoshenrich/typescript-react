import { useState } from "react"
import { weatherSnapshot, parsedData, zipData } from "../interfaces/interface"
import SplashPage from "../SplashPage/SplashPage"
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay"



const Pilot: React.FC = () =>{

    const [parsedData, setParsedData] = useState<parsedData | null>(null)
    const [zipDataObj, setZipDataObj] = useState<zipData | null>(null)

    return ( 
    <>
        {!parsedData && <SplashPage zipDataObj={zipDataObj} setZipDataObj={setZipDataObj } />}
        {parsedData && (<WeatherDisplay/>)}
    </> 
    )
} 


export default Pilot