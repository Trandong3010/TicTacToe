import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './../Board'
import 'bootstrap/dist/css/bootstrap.min.css';
import {select} from '../../store'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './style.css'

const mapStateToProps = (state) => {
    return {
        size: state.size,
        sizeGameBoard: state.sizeGameBoard,
        history: state.history,
        stepNumber: state.stepNumber
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        select: () => dispatch(select()),
    }
}
class index extends Component {
    state = {
        history: [{
            squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
        // size: [
        //     { id: 0, name: 'default' },
        //     { id: 1, name: '3 x 3' },
        //     { id: 2, name: '4 x 4' },
        //     { id: 3, name: '5 x 5' },
        //     { id: 4, name: '6 x 6' },
        //     { id: 5, name: '7 x 7' },
        //     { id: 6, name: '8 x 8' },
        //     { id: 7, name: '9 x 9' },
        //     { id: 8, name: '10 x 10' }
        // ],
        sizeGameBoard: 0
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    handleClick = (i) => {
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
    handlChange(value) {
        this.setState({ sizeGameBoard: value });
    }

    render() {
        const { history, sizeGameBoard } = this.state;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

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
            status = 'Next player: X' + (this.state.xIsNext ? 'X' : 'O');
        }
        console.log(this.props);
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        sizeboard={this.state.sizeGameBoard}
                        squares={current.squares}
                        onClick={this.handleClick}
                    />
                </div>
                <div className="game-info">
                    <div>
                        <DropdownButton id="dropdown-basic-button" title={this.props.size.find(x => x.id === sizeGameBoard).name}>
                            {this.props.size.map(p => <Dropdown.Item onClick={() => this.handlChange(p.id)}>{p.name}</Dropdown.Item>)}
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