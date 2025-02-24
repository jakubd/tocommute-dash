import { HourlyWeatherEntry } from "./weather-data-handle";

export default function WeatherHourlyView({givenHourlyForecastArr}: {givenHourlyForecastArr?: Array<HourlyWeatherEntry>}){
    if (!givenHourlyForecastArr) {
        return(
            <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <ul>
                    <li>Loading Hourly Data...</li>
                </ul>
            </div>
            </div>
        );
    } else {
        return(
            <div className="mx-auto m-4 flex max-w-lg items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div className="mx-4">
                    {givenHourlyForecastArr.map((item, idx) => (
                        <p key = {idx}><span className="font-bold m-2">{item.time}</span>: Temp: {item.temp}, Precip: {item.precip.length > 0? item.precip + "%" : "0%"} : {item.text}</p> 
                    ))}
                    <p className="italic">source: <a href="https://weather.gc.ca/en/forecast/hourly/index.html?coords=43.655,-79.383">weather.gc.ca</a></p>
                </div>
            </div>
        );
    }
}