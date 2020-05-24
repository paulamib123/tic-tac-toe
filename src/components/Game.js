import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'
import '../style.css'

const styles = {
    width: '-50px',
    margin: '20px auto',
}

export default function Game() {
    const [board, setboard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const boardCopy = [...board]

        if (winner || boardCopy[i]) return;

        boardCopy[i] = xIsNext ? 'X' : 'O'

        setboard(boardCopy)
        setXisNext(!xIsNext)


    }


    const renderMoves = () => (
        <button className="buttonstyle" onClick={() => setboard(Array(9).fill(null))}>
            Reset Game
        </button>
    )

    const decideWinner = () => {
        let status;
        if (winner) {
            if (winner === "DRAW") {
                status = "It's a Draw!!"
            }
            else {
                status = "Winner: " + winner
            }
        }
        else {
            if (xIsNext) {
                status = "Next Player: X"
            }
            else {
                status = "Next Player: O"
            }
        }

        return status

    }

    return (

        <>
            <div>
                <div style={styles}>
                    <Board squares={board} onClick={handleClick} />
                </div>
                <div className="textstyle">
                    {decideWinner()}
                </div>
                <div style={{ textAlign: "center" }}>
                    {renderMoves()}
                </div>
            </div>
        </>
    )
}

