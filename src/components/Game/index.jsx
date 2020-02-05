import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './../Board'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HANDLECHANGESIZE, HANDLECLICKGAME, JUMPTO } from '../../store/actions'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import {calculateWinner} from '../../common'
import './style.css'

const mapStateToProps = (state) => {
    return {
        data: state.gameReducer
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handlechange: payload => dispatch({type:HANDLECHANGESIZE, payload}),
        handleclick: payload => dispatch({type: HANDLECLICKGAME, payload}),
        jumpto: payload => dispatch({type: JUMPTO, payload})
    }
}

class index extends Component {
    jumpTo(step) {
        // this.setState({
        //     stepNumber: step,
        //     xIsNext: (step % 2) === 0
        // });
         this.props.jumpto(step);
    }

    handleClick = (i) => {
        this.props.handleclick(i);
    }
    handlChange(value) {
        this.props.handlechange(value);
    }

    render() {
        const { history, sizeGameBoard, stepNumber, size, xIsNext } = this.props.data;
        // //const current = history[this.state.stepNumber];
       // const { history, sizeGameBoard } = this.state;
        const current = history[stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((index, value) => {
            const desc = value ?
                'Go to move #' + value :
                'Go to game start';
            return (
                <li>
                    <button className="btn btn-primary" onClick={() => this.jumpTo(value)}>{desc}</button>
                </li>
            );
        })

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else {
            status = 'Next player: X' + (xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={this.handleClick}
                    />
                </div>
                <div className="game-info">
                    <div>
                        <DropdownButton id="dropdown-basic-button" title={size.find(x => x.id === sizeGameBoard).name}>
                            {size.map(p => <Dropdown.Item onClick={() => this.handlChange(p.id)}>{p.name}</Dropdown.Item>)}
                        </DropdownButton>
                    </div>
                    <div><h6>{status}</h6></div>
                    <ol><p>{moves}</p></ol>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);