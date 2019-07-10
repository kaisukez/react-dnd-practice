import React from 'react'

import Knight from './Knight'
import BoardSquare from './BoardSquare'
import { moveKnight, canMoveKnight } from '../state/Game';

export default function Square(props) {
    const { children, black } = props
    const backgroundColor = black ? 'black' : 'white'
    const color = black ? 'white' : 'black'
    return (
        <div style={{
            backgroundColor,
            color,
            width: '100%',
            height: '100%'
        }}>
            {children}
        </div>
    )
}

export function renderSquare(i, knightPosition) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
        <div
            key={i}
            style={{
                width: '12.5%',
                height: '12.5%',
            }}
            onClick={() => handleSquareClick(x, y)}
        >
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
    )
}

function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
}

function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY)
    }
}