import React from 'react'

import Knight from './Knight'
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

export function renderSquare(i, [knightX, knightY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = knightX === x && knightY === y
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return (
        <div
            key={i}
            style={{
                width: '12.5%',
                height: '12.5%'
            }}
            onClick={() => handleSquareClick(x, y)}
        >
            <Square black={black}>
                {piece}
            </Square>
        </div>
    )
}

function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY)
    }
}