import React, { Component } from 'react';
import {connect} from 'react-redux'
import './style.css'

const mapStateToProps = (state) => {
    return {
        sizeboard : state.gameReducer.sizeGameBoard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

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
            <button className={"square " + classname} onClick={this.props.onClick} >
            {this.props.value}
            </button>
        );
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(index);

