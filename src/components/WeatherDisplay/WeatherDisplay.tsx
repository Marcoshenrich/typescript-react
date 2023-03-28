import "./WeatherDisplay.css"

const WeatherDisplay: React.FC = () => {





    return (
        <div  className="Weather-Display">
            <div className="WD-Welcome-Banner">
                <div>welcome!</div>
                <div>Let's take a look at Moscow</div>
            </div>
             <div className="WD-Info">
                <div>
                    <div>today's stats</div>
                    <div>Feels Like</div>
                    <div>High</div>
                    <div>Low</div>
                    <div></div>
                </div>
                <div>
                    <div id="WD-Info-Separator"></div>
                </div>
                <div>
                    image
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay