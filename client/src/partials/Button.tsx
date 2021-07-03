import React from 'react'; 

class Button extends React.Component<any, any> {
    render(){
        return (
            <button className="bg-gray-100 px-4 py-1.5 rounded border focus:bg-main-primaryLight focus:border-main-primary outline-none" onClick={() => this.props.playGame(this.props.id)}>{this.props.name}</button>
        )
    }
}

export default Button