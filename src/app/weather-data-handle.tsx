// import { GCWeatherAPIRoot } from "./weather-gc-interface";

export interface HourlyWeatherEntry {
    date: string,
    time: string,
    temp: string, 
    condition: string,
    precip: string,
    wind_dir: string,
    wind_gust: string,
    wind_speed: string,
}

export interface DailyWeatherEntry {
    date: string,
    text: string,
    precip: string,
}

// export function extractHourlyForecast(givenWAR: GCWeatherAPIRoot) {

// }