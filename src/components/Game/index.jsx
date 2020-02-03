import React, { Component } from 'react';
import Board from './../Board'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './style.css'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
            size : [
                {id: 1, name: '3 x 3'},
                {id: 2, name: '4 x 4'},
                {id: 3, name: '5 x 5'},
                {id: 4, name: '6 x 6'},
                {id: 5, name: '7 x 7'},
                {id: 6, name: '8 x 8'},
                {id: 7, name: '9 x 9'},
                {id: 8, name: '10 x 10'}
                ],
                sizeGameBoard: 0
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    calculateWinner(squares) {
        const array = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < array.length; i++) {
            const [a, b, c] = array[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    handlChange = (value) => {
        this.setState({sizeGameBoard: value});
    }

    render() {
        const { history } = this.state;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((index, value) => {
            const desc = value ?
                'Go to move #' + value :
                'Go to game start';

            return (
                <li>
                    <button onClick={() => this.jumpTo(value)}>{desc}</button>
                </li>
            );
        })

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else {
            status = 'Next player: X' + (this.state.xIsNext ? 'X' : 'O');
        }


        
        var dropdownItem = this.state.size.map(p => {
            var name = p.name;
            return (
            <Dropdown.Item onClick={() => this.handlChange(p.id)}>{name}</Dropdown.Item>
            )
        })
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        sizeboard = {this.state.sizeGameBoard}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                <div>
                    <DropdownButton id="dropdown-basic-button" title="Board size:">
                        {dropdownItem}
                    </DropdownButton>
                </div>
                    <div><h3>{status}</h3></div>
                    <ol><h3>{moves}</h3></ol>
                </div>
            </div>
        );
    }
}

export default index;