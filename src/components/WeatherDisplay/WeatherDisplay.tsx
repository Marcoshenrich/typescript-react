import "./WeatherDisplay.css"

const WeatherDisplay: React.FC = () => {

    return (
        <div  className="Weather-Display">
            <div className="WD-Welcome-Banner">
                <div>welcome!</div>
                <div>Let's take a look at Moscow</div>
            </div>
             <div className="WD-Info-Container">
                <div className="WD-Info">
                    <div id="WD-Info-Header">Your Weather Today</div>
                    <div>
                        <div>Feels Like</div>
                        <div>High</div>
                        <div>Low</div>
                    </div>
                </div>
                <div className="WD-Info-Separator">
                    <div id="WD-Info-Separator-Line"></div>
                </div>
                <div className="WD-Info-Image-Container">
                    image
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay