export default function SingleSide() {
    return (
        <div className="w-96 bg-gray-100 h-screen px-10 flex flex-col justify-between">
            <div>
                <div className="flex justify-between mt-14 mb-5">
                    <div>Scoreboard</div>
                    <button className="text-sm">Clear</button>
                </div>
                <div className="border bg-gray-50 rounded-lg px-4 py-2 mb-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="">01</div>
                            <div className="ml-4 font-medium">You win</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
                <div className="border bg-gray-50 rounded-lg px-4 py-2 mb-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="">01</div>
                            <div className="ml-4 font-medium">You win</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="text-f12 text-right mb-3">Developed with by <a href="/" className="font-semibold">@mixpeal</a></div>
        </div>
    )
}