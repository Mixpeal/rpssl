import React from 'react'; 

class ButtonMp extends React.Component<any, any> {
    render(){
        return (
            <button onClick={() => this.props.setSelection(this.props.id, this.props.type)} className="bg-gray-100 px-4 py-1.5 rounded border outline-none disabled:opacity-50 mb-2" disabled={this.props.disabled}>{this.props.name}</button>
        )
    }
}

export default ButtonMp