import React, { Component } from 'react';
 import Square from './../Square'
import './style.css'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i){
        const squares  = this.state.squares.slice();
        if(this.calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares: squares, xIsNext: !this.state.xIsNext});
    }

    
    renderSquare(i){
        return( 
        <Square 
            value = {this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
        );
    }

    // calculateWinner(squares)
    // {
    //     const array = [
    //         [0,1,2],
    //         [3,4,5],
    //         [6,7,8],
    //         [0,3,6],
    //         [1,4,7],
    //         [2,5,8],
    //         [0,4,8],
    //         [2,4,6],
    //     ];
    //     for (let i = 0; i < array.length; i++) {
    //         const[a,b,c] = array[i];
    //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //             return squares[a];
    //         }
    //     }
    //     return null;
    // }

    render() {
        return (
            <div>
                {/* <div className="status" style={{marginBottom: 10, marginTop: 10}}>
                    {status}
                </div> */}

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


export default index;