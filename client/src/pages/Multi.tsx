import React from 'react';
import ButtonMp from '../partials/ButtonMp'

class Multi extends React.Component<any, any> {
    render() {
        
        return (
            <section>
                <div className="mt-10 text-txt-low">Welcome to Rock.Paper.Scissors.Lizard.Spock Game</div>
                <div className="mt-12 mb-8 text-txt-high font-medium">Hint: Player one will select first while player two looks away</div>

                <div className="">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <div className="mr-5">
                                <div className="font-semibold mb-5">Player One</div>
                                <div className="flex flex-wrap justify-start space-x-3">
                                    {
                                        this.props.choices.map((choice: any, key: any) => <ButtonMp name={choice.name} id={choice.id} key={key} active={this.props.playerOne} disabled={this.props.playerOne ?? true} loading={this.props.mploading} type="one" setSelection={this.props.setSelection} />)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="ml-5">
                                <div className="font-semibold mb-5 text-right">Player Two</div>
                                <div className="flex flex-wrap justify-end space-x-3">
                                    {
                                        this.props.choices.map((choice: any, key: any) => <ButtonMp name={choice.name} id={choice.id} key={key} active={this.props.playerTwo} disabled={this.props.playerOne === 0 || this.props.playerTwo !== 0 ? true : false } loading={this.props.mploading} type="two" setSelection={this.props.setSelection} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border bg-gray-50 flex-auto mt-10 rounded-lg flex flex-col justify-center items-center py-10">
                        {
                            this.props.mploading ? <div>Loading</div> :
                                this.props.mpresult && this.props.mpresult.player_one ?
                                    <div className="text-center">
                                        <div className="text-4xl mb-10 font-medium">{this.props.mpresult.results === "win" ? "Player One wins" : this.props.mpresult.results === "tie" ? "A Tie" : "Player Two wins" }</div>
                                        <div className="text-sm text-txt-medium">Player One played <span className="font-bold text-txt-high">{this.props.choices.filter((ch: any) => ch.id === this.props.mpresult.player_one)[0].name}</span></div>
                                        <div className="text-sm text-txt-medium mt-2">Player Two played <span className="font-bold text-txt-high">{this.props.choices.filter((ch: any) => ch.id === this.props.mpresult.player_two)[0].name}</span></div>

                                        <div><button className="text-f13 text-main-primary mt-10 font-bold outline-none" onClick={() => this.props.replayGame()}>Click here to replay</button> </div>
                                    </div>
                                    : 
                                    <div>
                                        <div className="text-sm text-txt-medium">Click any of the button to start the game</div>
                                    </div>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Multi




