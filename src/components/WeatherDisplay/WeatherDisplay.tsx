import "./WeatherDisplay.css"
import { RiWindyFill } from "react-icons/ri"
import { IoIosSunny } from "react-icons/io"
import { TbSnowflake } from "react-icons/tb"
import { WiHumidity } from "react-icons/wi"
import { BsFillPersonPlusFill } from "react-icons/bs"

import { weatherSnapshot, parsedData } from "../interfaces/interface"

import { useEffect, useState } from "react";
import { cityIdObj } from "../../city_code_bank/us_cities.js"

const WeatherDisplay: React.FC = () => {



    const [parsedData, setParsedData] = useState<parsedData | null>(null)
    const cityCodeKey: number = cityIdObj["CA,Alameda"]

    const fetchWeather = async () => {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityCodeKey}&units="imperial"&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        if (res.ok) {
            const data = await res.json();
            setParsedData(data)
            console.log(data)
        } else {
            console.log("error in fetchweather")
        }
    }

    const farhenheitConverter = (temp: number): number => {
        return Math.floor((temp + -273.15) * (9 / 5) + 32)
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return (
        <div  className="Weather-Display">
            <div className="WD-Welcome-Banner">
                <div id="WDW-Body">Your Weather Today in {parsedData?.city.name} </div>
            </div>
             <div className="WD-Info-Container">
                <div className="WD-Info-Box">
                    <div id="WD-Info-Header">Your Weather Today</div>
                    <div className="WD-Info-Body">

                        <div className="WD-Info-Set">
                            <div><BsFillPersonPlusFill /> Feels Like</div>
                            <div>{parsedData && (farhenheitConverter(parsedData?.list[0].main.feels_like))}</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><IoIosSunny /> High</div>
                            <div>{parsedData && (farhenheitConverter(parsedData?.list[0].main.temp_max))}</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><TbSnowflake /> Low</div>
                            <div>{parsedData && (farhenheitConverter(parsedData?.list[0].main.temp_min))}</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><RiWindyFill /> Wind</div>
                            <div>{parsedData && (Math.floor(parsedData?.list[0].wind.speed))}</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><WiHumidity /> Humidity</div>
                            <div>{parsedData && (parsedData?.list[0].main.humidity)}</div>
                        </div>

                    </div>
                </div>
                <div className="WD-Info-Separator">
                    <div id="WD-Info-Separator-Line"></div>
                </div>
                <div className="WD-Info-Box">
                    image
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay