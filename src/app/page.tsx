"use client";

import useSWR from 'swr';
import Label from './label'
import { TTCApiRoot } from './ttc-api-interface';
import TTCLister from './ttc-lister';
import { GCWeatherAPIRoot } from './weather-gc-interface';
import WeatherDailyView from './weather-daily-view';
import WeatherHourlyView from './weather-hourly-view';
import WeatherGCEmbed from './weather-gc-embed';

const DEBUG = true;

export default function MainPage() {
  
  // TTC data fetch
  const fetcher = (url: string) => fetch(url, {mode: 'cors'}).then((res) => res.json());
  const { data: ttc_data } = useSWR('https://corsproxy.io/?url=https://alerts.ttc.ca/api/alerts/live-alerts', fetcher);
  const TTCRoot: TTCApiRoot = ttc_data;
  if (DEBUG) {
    console.log(TTCRoot);
  }

  // GC Weather Data Fetch
  const { data: weather_data} = useSWR('https://corsproxy.io/?https://weather.gc.ca/api/app/en/Location/43.655,-79.383?type=city', fetcher);
  const WeatherRoot: GCWeatherAPIRoot = weather_data;
  if (DEBUG) {
    console.log(WeatherRoot);
  }

  
  return (
    <>
        <Label labelText="TTC Live Alerts" labelSubText=""/>
        <TTCLister givenTTR={TTCRoot} />
        <Label labelText="Weather" labelSubText=""/>
        <WeatherGCEmbed />
        <WeatherHourlyView givenWAR={WeatherRoot} />
        <WeatherDailyView givenWAR={WeatherRoot} />
    </>
  );
}
