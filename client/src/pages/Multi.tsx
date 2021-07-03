
function Multi() {
    return (
        <section>
            <div className="mt-10 text-txt-low">Hey Multi, Welcome to Rock.Paper.Scissors.Lizard.Spock Game</div>
            <div className="mt-12 mb-8 text-txt-high">Select to play with computer</div>

            <div className="flex">
                <div className="flex flex-col space-y-5">
                <button className="bg-gray-100 px-4 py-1.5 rounded">Rock</button>
                <button className="bg-gray-100 px-4 py-1.5 rounded">Paper</button>
                <button className="bg-gray-100 px-4 py-1.5 rounded">Scissors</button>
                <button className="bg-gray-100 px-4 py-1.5 rounded">Lizard</button>
                <button className="bg-gray-100 px-4 py-1.5 rounded">Spock</button>
                </div>
                <div className="border bg-gray-50 flex-auto ml-10 rounded-lg flex flex-col justify-center items-center">
                <div className="text-4xl mb-10 font-medium">You win</div>
                <div><button className="text-sm text-txt-medium">Click here to replay</button></div>
                </div>
            </div>
        </section>
    )
}

export default Multi