import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button 
//                 className="square"
//                 onClick={this.props.onClick}>
//                 {/* TODO */}
//                 {this.props.gameState}
//             </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button 
            className="square"
            onClick={props.onClick}>
            {/* TODO */}
            {props.gameState}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square gameState={this.props.gameState[i]} onClick={()=>this.props.onClick(i)}/>;
    }

    

    render() {
        const winner = calculateWinner(this.props.gameState);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.props.isNextX ? 'X' : 'O');
        }


        return (
            <div>
                <div className="status">{status}</div>
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

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isNextX: true,
            history: [{gameState: []}],
            currentStep: 0
        }
    }

    handleClick(i){
        
        this.setState(state => {
            const history = this.state.history.slice(0, this.state.currentStep + 1);;
            const current = history[history.length - 1];
            const newGameState = current.gameState.slice();

            newGameState[i] = state.isNextX ? 'X' : 'O'

            return {
                history: history.concat([{
                    gameState: newGameState,
                }]),
                isNextX: !state.isNextX,
                currentStep: history.length
            }
        })
    }

    jumpTo(index) {
        this.setState(state => ({
            currentStep: index,
            isNextX: ((index % 2 === 0) ? true : false)
        }))
    }

    render() {
        const history = this.state.history;
        const currentStep = this.state.currentStep
        const current = history[currentStep];

        const moves = history.map((current, index) => {
            return (<li key={index}>
                <button onClick={()=>this.jumpTo(index)}>Go to step {index}</button>
            </li>)
        })
        
        return (
            <div className="game">
                <div className="game-board">
                    <Board gameState={current.gameState} isNextX={this.state.isNextX} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }