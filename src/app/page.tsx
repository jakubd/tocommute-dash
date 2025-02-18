"use client";

import useSWR from 'swr';
import Label from './label'
import { TTCApiRoot } from './ttc-api-interface';
import TTCLister from './ttc-lister';
import WeatherWidget from './weather';


export default function MainPage() {
  const fetcher = (url: string) => fetch(url, {mode: 'cors'}).then((res) => res.json());
  const { data: ttc_data } = useSWR('https://corsproxy.io/?url=https://alerts.ttc.ca/api/alerts/live-alerts', fetcher)
  const TTCRoot: TTCApiRoot = ttc_data;

  console.log(TTCRoot);
  return (
    <>
        <Label labelText="TTC Live Alerts" labelSubText=""/>
        <TTCLister givenTTR={TTCRoot} />
        <Label labelText="Weather" labelSubText=""/>
        <WeatherWidget />
    </>
  );
}
