
import { useEffect, useState } from "react";
import { ChangeEvent, FormEvent } from 'react';
import Solar from "../../assets/solar_field.jpeg"
import "./SplashPage.css"


interface zipData {
    results: {
        [zip: number]: {
            city: string
        }
    }
}



const SplashPage = () => {

    const [zipCode, setZipcode] = useState<string>("")
    const [placeHolder, setPlaceHolder] = useState<string>("")

    const fetchZip = async (zip: string) => {
        const res = await fetch(`https://app.zipcodebase.com/api/v1/search?apikey=${process.env.REACT_APP_ZIP_API_KEY}&codes=${zip}&country=US`)
        if (res.ok) {
            const data = await res.json();
            reviewZipData(data)
        } else {
            console.log("error in fetchZip")
        }
    }

    const reviewZipData = (data: zipData) => {
        console.log(data)
        if (Array.isArray(data.results)) {
            setPlaceHolder("Invalid Zip")
        } else {
            console.log(data)
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
