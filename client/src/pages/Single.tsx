import React from 'react';
import Button from '../partials/Button'

class Single extends React.Component<any, any> {
    render() {
        return (
            <section>
                <div className="mt-10 text-txt-low">Welcome to Rock.Paper.Scissors.Lizard.Spock Game</div>
                <div className="mt-12 mb-8 text-txt-high font-medium">Select to play with computer</div>

                <div className="flex">
                    <div className="flex flex-col space-y-5">
                        {
                            this.props.choices.map((choice: any, key: any) => <Button name={choice.name} id={choice.id} key={key} active={this.props.active} loading={this.props.loading} playGame={this.props.playGame} />)
                        }
                    </div>
                    <div className="border bg-gray-50 flex-auto ml-10 rounded-lg flex flex-col justify-center py-10 items-center">
                        {
                            this.props.loading ? <div>Loading</div> :
                                this.props.result && this.props.result.results ?
                                    <div className="text-center">
                                        <div className="text-4xl mb-10 font-medium">You {this.props.result.results}</div>
                                        <div className="text-sm text-txt-medium">Computer played <span className="font-bold text-txt-high">{this.props.choices.filter((ch: any) => ch.id === this.props.result.computer)[0].name}</span></div>
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

export default Single




