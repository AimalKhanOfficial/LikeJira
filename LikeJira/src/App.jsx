import { useEffect, useState } from 'react';
import Board from './components/Board';
import './index.css'
import { getBoardState } from './dbHanlder';

function App() {
  const [boardState, setBoardState] = useState(getBoardState());
  
  return (
    <Board boardState={boardState} />
  )
}

export default App
