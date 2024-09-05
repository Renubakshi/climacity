import { useState } from "react"
import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        feelsLike: "30",
        humidity: 50,
        temp: 30,
        tempMax: 30.5,
        tempMin: 30.5,
        description:"clear sky" ,
        city: "Dream world",
        countryCode: "DW"
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result)
    }

    return (<>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox weatherInfo={weatherInfo} />
    </>)
}