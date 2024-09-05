import { useState } from "react"
import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [err,setErr] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "e539d8b2c98ab58123f60dbc4a33d652"

    // for weather api
    let getWeather = async () => {
        try{
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return {
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                description: jsonResponse.weather[0].description,
                city: jsonResponse.name,
                countryCode: jsonResponse.sys.country
            }
        }catch(e){
            throw ` ${e}`;
            
        }
    }
        
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async(e)=>{
        e.preventDefault();
        setCity("");
        try{
        let result = await getWeather();
        updateInfo(result)
        }catch(e){
            setErr(true);
        }
    }
    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={city} 
                    />
                    {err&&<p style={{color:"red"}}>No such place exist!</p>}
                    <br /><br />
                <Button type="submit" variant="contained" endIcon={<SearchIcon />}>Search</Button>
                <br/><br/>
            </form>
        </div>
    )
}