
// import { useEffect, useState } from "react";
// import {cityIdObj} from "../../city_code_bank/us_cities.js"

// const Repo = () => {
//     interface parsedData {
//         city: {
//             country: string
//             name: string
//             sunrise: number
//             sunset: number
//         }
//         list: weatherSnapshot[]
//     }

//     interface weatherSnapshot {
//         clouds: {
//             all: number
//         }
//         main: {
//             feels_like: number
//             temp_max: number
//             temp_min: number
//         }
//     }



//     const [parsedData, setParsedData] = useState<parsedData | null>(null)
//     const cityCodeKey:number = cityIdObj["CA,Alameda"]

//     const fetchWeather = async () => {
//         const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityCodeKey}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
//         if (res.ok) {
//             const data = await res.json();
//             setParsedData(data)
//             console.log(data)
//         } else {
//             console.log("error in fetchweather")
//         }
//     }

//     useEffect(() => {
//         fetchWeather()
//     }, [])

//     return (
//         <div>
//             hello
//             {parsedData && (parsedData?.city.name)}
//         </div>
//     );
// }

const Repo = {}
export default Repo;
