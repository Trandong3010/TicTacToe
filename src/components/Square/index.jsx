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
        var size = this.props.sizeboard;
        var classname = "";
        if(size === 0)
        {
            classname = "squaresize"
        } else if(size === 1)
        {
            classname = "squaresize1"
        }else if(size === 2)
        {
            classname = "squaresize2"
        }
        else if(size === 3)
        {
            classname = "squaresize3"
        }
        else if(size === 4)
        {
            classname = "squaresize4"
        }
        else if(size === 5)
        {
            classname = "squaresize5"
        }
        else if(size === 6)
        {
            classname = "squaresize6"
        }
        else if(size === 7)
        {
            classname = "squaresize7"
        }
        else if(size === 8)
        {
            classname = "squaresize8"
        }
        return (
            // <button className="square" onClick = {this.props.onClick()}>
            //     {this.props.value}
            // </button>
            <button className={"square " + classname} onClick={this.props.onClick} >
            {this.props.value}
            </button>
            // <div>
            //   {this.Square()}
            // </div>
        );
    }

}
export default index;