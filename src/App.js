import React, { useState, useEffect, useMemo } from 'react';

import Board from './components/Board'
import { observe } from './state/Game'

function App() {
    const [knightPosition, setKnightPosition] = useState([0, 0])
    useEffect(() => {
        console.log('haha')
        observe(setKnightPosition)
    }, [])
    return (
        <Board
            knightPosition={knightPosition}
        />
    );
}

export default App;
