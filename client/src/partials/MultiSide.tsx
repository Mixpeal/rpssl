import React from 'react';

class MultiSide extends React.Component<any, any> {
    render() {
        const cutResult = this.props.results.slice(0, 10)
        const player_one = cutResult.filter((cr: any) => cr.results === 'win')
        const player_two = cutResult.filter((cr: any) => cr.results === 'lose')
        return (
            <div className="lg:w-96 mt-10 lg:mt-0 bg-gray-100 lg:h-screen px-5 lg:px-10 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between mt-5 mb-5">
                        <div>Scoreboard</div>
                        {this.props.results.length > 0 ? <button onClick={this.props.clearScores} className="text-sm outline-none">Clear</button> : null}
                    </div>
                    {
                        this.props.results.length > 0 ? this.props.results.slice(0, 10).map((res: any, key: any) => (
                            <div key={key} className="border bg-gray-50 rounded-lg px-4 py-2 mb-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="text-txt-low">{key + 1}</div>
                                        <div className="ml-4 font-medium">{res.results === "win" ? "Player One wins" : res.results === "tie" ? "A Tie" : "Player Two wins" }</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        )) : <div className="text-sm text-txt-low">No score found</div>
                    }

                    {this.props.results.length > 0 ? <div className="text-sm mt-8 text-txt-low">Player One: <span className="font-bold text-txt-high">{player_one.length} Wins</span> </div> : null}
                    {this.props.results.length > 0 ? <div className="text-sm mt-2 text-txt-low">Player Two: <span className="font-bold text-txt-high">{player_two.length} Wins</span> </div> : null}
                </div>
                <div className="text-f12 text-center lg:text-right mb-3 mt-10">Developed with ❤️ by <a href="https://twitter.com/mixpeal" target="_blank" rel="noreferrer" className="font-bold text-txt-high">@mixpeal</a></div>
            </div>
        )
    }
}

export default MultiSide