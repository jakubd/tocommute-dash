"use client";

import useSWR from 'swr';
import Label from './label'
import { TTCApiRoot } from './ttc-api-interface';
import TTCLister from './ttc-lister';
import { GCWeatherAPIRoot } from './weather-gc-interface';
import WeatherDailyView from './weather-daily-view';
import WeatherHourlyView from './weather-hourly-view';
import { filterRoutes, SimplifyRouteData } from './ttc-data-handle';
import { extractDailyForcecast, extractHourlyForecast, trimDailyForcast, trimHourlyForecast } from './weather-data-handle';
import { Analytics } from "@vercel/analytics/react"

const DEBUG = false;
const CORSProxy = "https://corsproxy.io/?url=";

export default function MainPage() {
  
  // TTC data fetch
  const fetcher = (url: string) => fetch(url, {mode: 'cors'}).then((res) => res.json());
  const { data: ttc_data } = useSWR(CORSProxy + 'https://alerts.ttc.ca/api/alerts/live-alerts', fetcher);
  const TTCRoot: TTCApiRoot = ttc_data;
  const Routes = TTCRoot? filterRoutes(SimplifyRouteData(TTCRoot.routes)): undefined;

  if (DEBUG) {
    console.log(TTCRoot)
    console.log(Routes);
  }

  // GC Weather Data Fetch
  const { data: weather_data} = useSWR(CORSProxy + 'https://weather.gc.ca/api/app/en/Location/43.655,-79.383?type=city', fetcher);
  const WeatherRoot: GCWeatherAPIRoot = weather_data;
  const DailyForceast = WeatherRoot? trimDailyForcast(extractDailyForcecast(WeatherRoot)): undefined;
  const HourlyForecast = WeatherRoot? trimHourlyForecast(extractHourlyForecast(WeatherRoot)): undefined;

  if (DEBUG) {
    console.log(WeatherRoot);
    console.log(HourlyForecast);
    console.log(DailyForceast);
  }


  return (
    <>
        <Label labelText="TTC Live Alerts" labelSubText=""/>
        <TTCLister givenRoutes={Routes} />
        <Label labelText="Forcecast" labelSubText=""/>
        <WeatherDailyView givenDailyForcecastArr={DailyForceast} />
        <WeatherHourlyView givenHourlyForecastArr={HourlyForecast} />
        <Analytics/>
    </>
  );
}
