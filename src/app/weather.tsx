/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


export default function WeatherWidget() {
    return(
        <>
            <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div className="rounded-xl border-black flex-col" id="ww_1f25be9bc57a4" v='1.3' loc='id' a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl1531"],"font":"Arial","sl_ics":"one","sl_sot":"celsius","cl_bkg":"#455A64","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>More forecasts: <a href="https://oneweather.org/calgary/30_days/" id="ww_1f25be9bc57a4_u" target="_blank">Weather Calgary 30 days</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_1f25be9bc57a4"></script>
            </div>
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