import React from 'react';
import Button from '../partials/Button'

class Single extends React.Component<any, any> {
    render() {
        return (
            <section>
                <div className="mt-10 text-txt-low">Welcome to Rock.Paper.Scissors.Lizard.Spock Game</div>
                <div className="mt-12 mb-8 text-txt-high">Select to play with computer</div>

                <div className="flex">
                    <div className="flex flex-col space-y-5">
                        {
                            this.props.choices.map((choice : any, key : any) => <Button name={choice.name} key={key} playGame={this.props.playGame}/> )
                        }
                    </div>
                    <div className="border bg-gray-50 flex-auto ml-10 rounded-lg flex flex-col justify-center items-center">
                        <div className="text-4xl mb-10 font-medium">You win</div>
                        <div><button className="text-sm text-txt-medium">Click here to replay</button></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Single




