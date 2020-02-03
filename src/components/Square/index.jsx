import React, { Component } from 'react';
import './style.css'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }
    //  Square = () => {
    //   return (
    //     <button className="square" onClick={this.props.onClick}  style={{background: '#fff', border: '1px solid #999', float: 'left', fontSize: '24px', fontWeight: 'bold', lineHeight: '34px', height: '34px', marginRight: '-1px', marginTop: '-1px', padding: '0', textAlign: 'center', width: '34px'}}>
    //       {this.props.value}
    //     </button>
    //   );
    // }
    render() {
        return (
            // <button className="square" onClick = {this.props.onClick()}>
            //     {this.props.value}
            // </button>
            <button className="square" onClick={this.props.onClick} >
            {this.props.value}
            </button>
            // <div>
            //   {this.Square()}
            // </div>
        );
    }

}
export default index;