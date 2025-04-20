import { RouteAlert } from "./ttc-data-handle";


export default function TTCLister({givenRoutes}: {givenRoutes?: Array<RouteAlert>}) {
    if (!givenRoutes) {
        return(
            <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <ul>
                    <li>Data loading...</li>
                </ul>
            </div>
            </div>
        );
    } else {

        const icon = givenRoutes.map((item, idx) => {
            const iconpack = [];
            if (item.serviceType === 0) {
                iconpack[idx] = "Ⓜ️"
            } else if (item.serviceType === 1) {
                iconpack[idx] = "🚌"
            } else {
                iconpack[idx] = "🚋"
            }
            return iconpack
        })

        return(
            <div className="mx-auto m-4 flex max-w-3xl items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <ul>
                    <span>Route Alerts: {givenRoutes.length}</span>
                    <div className="mx-4">
                        {givenRoutes.map((item, idx) => (
                           <p key = {idx}>
                            {icon[idx]}
                            <span className="font-bold">{item.severity}</span>: 
                            <span className="border-2 border-solid rounded-md bg-red-600 m-1">{item.route}</span> 
                            {item.title}
                           </p>     
                        ))}
                    </div>
                    <li className="italic">source: <a href="https://www.ttc.ca/">ttc.ca</a></li>
                </ul>
            </div>
            </div>
        );
    }

}