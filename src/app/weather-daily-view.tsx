import { DailyWeatherEntry } from "./weather-data-handle";

export default function WeatherDailyView({givenWAR: givenDailyForcecastArr}: {givenWAR?: Array<DailyWeatherEntry>}){
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
            <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div className="mx-4">
                    {givenDailyForcecastArr.map((item, idx) => (
                        <p key = {idx}><span className="font-bold">{item.date}</span>: <span className="border-2 border-solid rounded-md bg-red-600 m-1">{item.precip}</span> {item.text}</p> 
                    ))}
                </div>
            </div>
        );
    }
}