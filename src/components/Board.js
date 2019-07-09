import React from 'react'

import { renderSquare } from './Square'

export default function Board(props) {
    const { knightPosition } = props
    const square = []
    for (let i = 0; i < 64; i++) {
        square.push(renderSquare(i, knightPosition))
    }
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {square}
        </div>
    )
}