import { TTCApiRoot } from "./ttc-api-interface";

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

        return(
            <div className="mx-auto m-4 flex max-w-3xl items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <ul>
                    <span>Site Wide Alerts: {TTR.siteWideCustom.length? TTR.siteWideCustom.length : 0}</span>
                    <div className="mx-4">
                        {TTR.siteWideCustom.map((item, idx) => (
                           <p key={idx}><span className="font-bold">{item.severity}</span>: {item.description}</p> 
                        ))}
                    </div>
                    <span>Routes Alerts: {TTR.routes.length}</span>
                    <div className="mx-4">
                        {TTR.routes.map((item, idx) => (
                           <p key = {idx}><span className="font-bold">{item.severity}</span>: {item.route} : {item.title}</p> 
                        ))}
                    </div>
                    <span>Accessiblity Alerts: {TTR.accessibility.length}</span>
                    <div className="mx-4">
                        {TTR.accessibility.map((item, idx) => (
                           <span key = {idx}><span className="font-bold">{item.severity}</span>: {item.title}</span> 
                        ))}
                    </div>
                </ul>
            </div>
            </div>
        );
    }

}