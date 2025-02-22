import { DailyWeatherEntry } from "./weather-data-handle";

export default function WeatherDailyView({givenDailyForcecastArr}: {givenDailyForcecastArr?: Array<DailyWeatherEntry>}){
    if (!givenDailyForcecastArr) {
        return(
            <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <ul>
                    <li>Loading Daily Data...</li>
                </ul>
            </div>
            </div>
        );
    } else {
        return(
            <div className="mx-auto m-4 flex max-w-3xl items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div className="mx-4">
                    {givenDailyForcecastArr.map((item, idx) => (
                        <p key = {idx}><span className="font-bold">{item.date}</span>: <span className="">Precip: {item.precip.length > 0? item.precip + "%" : "0%"}</span>, {item.text}</p> 
                    ))}
                    <p className="italic">source: <a href="https://weather.gc.ca/en/location/index.html?coords=43.655,-79.383">weather.gc.ca</a></p>
                </div>
            </div>
        );
    }
}