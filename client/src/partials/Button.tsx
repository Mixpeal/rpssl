import React from 'react'; 

class Button extends React.Component<any, any> {
    render(){
        return (
            <button className={this.props.active === this.props.id ? `px-4 py-1.5 rounded border bg-main-primaryLight border-main-primary outline-none disabled:opacity-50` : `bg-gray-100 px-4 py-1.5 rounded border outline-none disabled:opacity-50` } onClick={() => this.props.playGame(this.props.id)} disabled={this.props.loading}>{this.props.name}</button>
        )
    }
}

export default Button