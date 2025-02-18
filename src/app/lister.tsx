export default function Lister({givenList}: {givenList?: Array<string>}) {
    if (!givenList) {
        givenList = []
    }

    return(
        <div className="mx-auto m-4 flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
            <ul>
                {givenList.map((thisItem, idx) => (
                    <li className="text-gray-500 dark:text-gray-400" key={idx}>{thisItem}</li>
                )) }
            </ul>
        </div>
        </div>
    );
}