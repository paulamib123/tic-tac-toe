import React from 'react'
import Square from './Square'

const style = {
    border: '10px solid black',
    borderRadius: '10px',
    width: '450px',
    height: '450px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

export default function Board({ onClick, squares }) {
    return (
        <div style={style}>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}
