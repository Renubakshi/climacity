import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';

export default function InfoBox({ weatherInfo }) {
    const HOT_URL = "https://media.istockphoto.com/id/917178010/photo/road-panorama-on-sunny-spring-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=xBrnKPYdoOQjECCUCtGyVfg1987s6lr1Ek7Spxk-rRU="
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="
    const COLD_URL = "https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.webp?a=1&b=1&s=612x612&w=0&k=20&c=2HCnfJ8Cpe1EF1pSW15UsUC3ZwpPhbkv7A30pisf_iw="
    const CLOUD_URL = "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3VkJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 ,boxShadow:".1rem .3rem 2rem black"}} >
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        weatherInfo.humidity > 80
                        ? RAIN_URL
                        : weatherInfo.humidity >= 59
                        ? CLOUD_URL
                        : weatherInfo.temp > 15
                        ? HOT_URL
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {
                        weatherInfo.humidity > 80
                        ? <ThunderstormIcon/>
                        : weatherInfo.humidity >= 59
                        ? <CloudIcon/>
                        : weatherInfo.temp > 15
                        ? <WbSunnyIcon/>
                        : <AcUnitIcon/>
                    }{weatherInfo.city},{weatherInfo.countryCode}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temperature = {weatherInfo.temp}&deg;C</p>
                        <p>Maximum Temperature = {weatherInfo.tempMax}&deg;C</p>
                        <p>Minimum Temperature = {weatherInfo.tempMin}&deg;C</p>
                        <p>Humidity = {weatherInfo.humidity}</p>
                        <p>The weather can described as <strong><i>{weatherInfo.description}</i></strong> and feels like {weatherInfo.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>)
}
