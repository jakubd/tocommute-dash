export default function Label({labelText, labelSubText}: {labelText: string; labelSubText: string}) {
    return(
        <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
            <div className="text-xl font-medium text-black dark:text-white">{labelText? labelText : ""}</div>
            <p className="text-gray-500 dark:text-gray-400">{labelSubText? labelSubText : ""}</p>
        </div>
        </div>
    );
}