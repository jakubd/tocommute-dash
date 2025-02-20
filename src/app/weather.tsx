/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


export default function WeatherWidget() {
    return(
        <>
            <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <iframe title="Environment Canada Weather" className="w-full" width="296" height="191" src="https://weather.gc.ca/wxlink/wxlink.html?coords=43.655%2C-79.383&lang=e"></iframe>
                <ul>
                    <li><a href="https://weather.gc.ca/en/forecast/hourly/index.html?coords=43.655,-79.383">H</a></li>
                    <li><a href="https://weather.gc.ca/en/location/index.html?coords=43.655,-79.383">D</a></li>
                </ul>
 
            </div>
        </>
    );
}