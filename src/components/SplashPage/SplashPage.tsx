
import { useEffect, useState } from "react";
import { ChangeEvent, FormEvent } from 'react';



const SplashPage = () => {

    const [zipCode, setZipcode] = useState("00000")

    const submitZip = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(zipCode)
        setZipcode("00000")
    }

    return (
        <div className="Splash-Page">
            <div className="Splash-Page-Welcome">

            </div>
            <div className="Splash-Page-Input-Container">
                <div id="SPI-Text">  
                    Enter your zip code
                </div>

                <div className="SPI-Form">
                    <form onSubmit={submitZip}>
                        <input type="text" onChange={(e) => { setZipcode(e.target.value)}}/>
                        <button></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;
