import { GCWeatherAPIRoot } from "./weather-gc-interface";

export interface HourlyWeatherEntry {
    date: string
    time: string
    temp: string
    condition: string
    precip: string
    wind_dir: string
    wind_gust: string
    wind_speed: string
}

export interface DailyWeatherEntry {
    date: string
    text: string
    precip: string
}

// export function extractHourlyForecast(givenWAR: GCWeatherAPIRoot) : Array<HourlyWeatherEntry> {

// }

export function extractDailyForcecast(givenWAR: GCWeatherAPIRoot): Array<DailyWeatherEntry>  {
    const toRet: Array<DailyWeatherEntry> = []; 
    givenWAR[0].dailyFcst.daily.forEach((item) => {
        toRet.push({
            date: item.date,
            text: item.text,
            precip: item.precip,

        })
    });
    return toRet;
}

export function trimDailyForcast(givenDailyForcecastArr: Array<DailyWeatherEntry>): Array<DailyWeatherEntry> {
    return givenDailyForcecastArr.slice(0,4);
}