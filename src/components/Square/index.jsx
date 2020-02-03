import React, { Component } from 'react';
import './style.css'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }
     Square = () => {
      return (
        <button className="square" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      );
    }
    render() {
        return (
            // <button className="square" onClick = {this.props.onClick()}>
            //     {this.props.value}
            // </button>
            <div>
              {this.Square()}
            </div>
        );
    }
}

export default index;