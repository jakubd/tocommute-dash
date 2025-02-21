import { TTCApiRoot, TTCRoute } from "./ttc-api-interface";

interface RouteAlert {
    route: string
    title: string
    severity: string
}

// TTCRoute[] has a lot of stuff we don't need so this converts those 
// entries to the simpler "RouteAlert" type which is only the junk we need.
function SimplifyRouteData(givenRoutes: TTCRoute[]) : Array<RouteAlert>{
    return givenRoutes.map(thisRoute => ({
        route: thisRoute.route,
        title: thisRoute.title,
        severity: thisRoute.severity,
    }));
}

// TTC API has weird WEBSITE alerts that are for route 9999 so lets remove those
function filterRoutes(givenRoutes: Array<RouteAlert>) {
    for (let i = 0; i < givenRoutes.length; i++) {
        if (givenRoutes[i].route == "9999")
            givenRoutes.splice(i, 1);
    }
    return givenRoutes;
}

export default function TTCLister({givenTTR}: {givenTTR?: TTCApiRoot}) {
    if (!givenTTR) {
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

        const TTR = structuredClone(givenTTR);
        const rts = filterRoutes(SimplifyRouteData(TTR.routes));

        return(
            <div className="mx-auto m-4 flex max-w-3xl items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <ul>
                    <span>Routes Alerts: {TTR.routes.length}</span>
                    <div className="mx-4">
                        {rts.map((item, idx) => (
                           <p key = {idx}><span className="font-bold">{item.severity}</span>: <span className="border-2 border-solid rounded-md bg-red-600 m-1">{item.route}</span> {item.title}</p> 
                        ))}
                    </div>
                    <li>source: <a href="https://www.ttc.ca/">ttc.ca</a></li>
                </ul>
            </div>
            </div>
        );
    }

}