
import { useEffect, useState } from "react";
import { ChangeEvent, FormEvent } from 'react';
import "./SplashPage.css"



const SplashPage = () => {

    const [zipCode, setZipcode] = useState("")

    const submitZip = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(zipCode)
        setZipcode("")
    }

    return (
        <div className="Splash-Page">
            <div className="Splash-Page-Welcome">

            </div>
            <div className="Splash-Page-Input-Container">
                <div id="SPI-Text">  
                    Enter your zip code
                </div>

                <div className="SPI-Form-Container">
                    <form onSubmit={submitZip} className="SPI-Form">
                        <input id="SPI-Input" type="text" value={zipCode} onChange={(e) => { setZipcode(e.target.value)}}/>
                        <button id="SPI-Button" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;
