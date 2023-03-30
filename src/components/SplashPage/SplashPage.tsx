
import { useEffect, useState } from "react";
import { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import Solar from "../../assets/solar_field.jpeg"
import "./SplashPage.css"

import { zipData } from "../interfaces/interface";


type zipProps = {
    zipDataObj: zipData | null;
    setZipDataObj: React.Dispatch<React.SetStateAction<zipData | null>>;
};

const SplashPage: React.FC<zipProps> = ({ zipDataObj, setZipDataObj }) => {

    const navigate = useNavigate()

    const [zipCode, setZipcode] = useState<string>("")
    const [placeHolder, setPlaceHolder] = useState<string>("")

    const fetchZip = async (zip: string) => {
        const res = await fetch(`https://app.zipcodebase.com/api/v1/search?apikey=${process.env.REACT_APP_ZIP_API_KEY}&codes=${zip}&country=US`)
        if (res.ok) {
            const data = await res.json();
            setZipDataObj(data)
        } else {
            console.log("error in fetchZip")
        }
    }

    const reviewZipData = (data: zipData) => {
        if (Array.isArray(data.results)) {
            setPlaceHolder("Invalid Zip")
        } else {
            console.log(data)
            // navigate("/weather")
        }
    }


    const submitZip = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetchZip(zipCode)
        setZipcode("")
        setPlaceHolder("")
    }



    return (
        <div className="Splash-Page">
            <img src={Solar} alt="" id="Splash-Image"/>

            <div className="Splash-Page-Welcome">
                <div id="SPW-Header">Solarfy</div>
                <div id="SPW-Text">See how much a single solar panel can generate in your area in the next five days</div>
            </div>
            <div className="Splash-Page-Input-Container">
                <div id="SPI-Text">  
                    Enter your zip code
                </div>

                <div className="SPI-Form-Container">
                    <form onSubmit={submitZip} className="SPI-Form">
                        <input id="SPI-Input" type="text" value={zipCode} placeholder={placeHolder} onChange={(e) => { setZipcode(e.target.value)}}/>
                        <button id="SPI-Button" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;
