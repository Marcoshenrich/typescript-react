import "./WeatherDisplay.css"
import { RiWindyFill } from "react-icons/ri"
import { IoIosSunny } from "react-icons/io"
import { TbSnowflake } from "react-icons/tb"
import { WiHumidity } from "react-icons/wi"
import { BsFillPersonPlusFill } from "react-icons/bs"

import { weatherSnapshot, parsedData } from "../interfaces/interface"

import { SyntheticEvent, useEffect, useState } from "react";
import { cityIdObj } from "../../city_code_bank/us_cities.js"

type weatherProps = {
    parsedDataObj: parsedData | null;
    setParsedDataObj: React.Dispatch<React.SetStateAction<parsedData | null>>;
};


const WeatherDisplay: React.FC<weatherProps> = ({ parsedDataObj, setParsedDataObj }) => {
    const [tempType, setTempType] = useState<string>("farenheit")


    const tempConverter = (temp: number): number => {
        switch (tempType) {
            case "farenheit":
                return Math.floor((temp + -273.15) * (9 / 5) + 32)
                break

            case "celsius":
                return Math.floor((temp + -273.15))
                break
        }
        return 0
    }

    const tempSwitcher = (e: SyntheticEvent):void => {
        e.preventDefault()
        setTempType("celsius")
    }

    return (
        <div  className="Weather-Display">
            <div className="WD-Welcome-Banner">
                <div id="WDW-Body">Your Weather Today in {parsedDataObj?.city.name} </div>
                <div>{parsedDataObj && (tempConverter(parsedDataObj?.list[0].main.temp))}&#176;</div>
            </div>
             <div className="WD-Info-Container">
                <div className="WD-Info-Box">
                    <div id="WD-Info-Header">Your Weather Today</div>
                    <div className="WD-Info-Body">

                        <div className="WD-Info-Set">
                            <div><BsFillPersonPlusFill /> Feels Like</div>
                            <div>{parsedDataObj && (tempConverter(parsedDataObj?.list[0].main.feels_like))}&#176;</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><IoIosSunny /> High</div>
                            <div>{parsedDataObj && (tempConverter(parsedDataObj?.list[0].main.temp_max))}&#176;</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><TbSnowflake /> Low</div>
                            <div>{parsedDataObj && (tempConverter(parsedDataObj?.list[0].main.temp_min))}&#176;</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><RiWindyFill /> Wind</div>
                            <div>{parsedDataObj && (Math.floor(parsedDataObj?.list[0].wind.speed))};</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><WiHumidity /> Humidity</div>
                            <div>{parsedDataObj && (parsedDataObj?.list[0].main.humidity)}</div>
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