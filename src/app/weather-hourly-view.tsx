import { GCWeatherAPIRoot } from "./weather-gc-interface";

export default function WeatherHourlyView({givenWAR}: {givenWAR?: GCWeatherAPIRoot}){
    if (!givenWAR) {
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
            <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <ul>
                    <li>Loaded Hourly Weather</li>
                </ul>
            </div>
            </div>
        );
    }
}