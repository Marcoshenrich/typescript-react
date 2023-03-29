import "./WeatherDisplay.css"
import { RiWindyFill } from "react-icons/ri"
import { IoIosSunny } from "react-icons/io"
import { TbSnowflake } from "react-icons/tb"
import { WiHumidity } from "react-icons/wi"
import { BsFillPersonPlusFill } from "react-icons/bs"

const WeatherDisplay: React.FC = () => {

    return (
        <div  className="Weather-Display">
            <div className="WD-Welcome-Banner">
                <div id="WDW-Body">Your Weather Today in Alameda</div>
            </div>
             <div className="WD-Info-Container">
                <div className="WD-Info-Box">
                    <div id="WD-Info-Header">Your Weather Today</div>
                    <div className="WD-Info-Body">

                        <div className="WD-Info-Set">
                            <div><BsFillPersonPlusFill /> Feels Like</div>
                            <div>35</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><IoIosSunny /> High</div>
                            <div>35</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><TbSnowflake /> Low</div>
                            <div>35</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><RiWindyFill /> Wind</div>
                            <div>35</div>
                        </div>

                        <div className="WD-Info-Set">
                            <div><WiHumidity /> Humidity</div>
                            <div>35</div>
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