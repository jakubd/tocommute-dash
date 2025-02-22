import { GCWeatherAPIRoot } from "./weather-gc-interface";

export interface HourlyWeatherEntry {
    date: string
    time: string
    temp: string
    text: string
    precip: string
}

export interface DailyWeatherEntry {
    date: string
    text: string
    precip: string
}

export function extractHourlyForecast(givenWAR: GCWeatherAPIRoot) : Array<HourlyWeatherEntry> {
    const toRet: Array<HourlyWeatherEntry> = []; 
    givenWAR[0].hourlyFcst.hourly.forEach((item) => {
        toRet.push({
            date: item.date,
            time: item.time,
            temp: item.temperature.metric,
            text: item.condition,
            precip: item.precip,
        })
    });
    return toRet;
}

export function trimHourlyForecast(givenHourlyForecast: Array<HourlyWeatherEntry>): Array<HourlyWeatherEntry> {
    return givenHourlyForecast.slice(0,9);
}

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