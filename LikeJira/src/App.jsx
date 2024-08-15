import { useState, lazy, Suspense, useEffect } from 'react';
import Board from './components/Board';
import './index.css'
import { getBoardState } from './dbHanlder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Backlog = lazy(() => import('./components/Backlog'));
import MegaNav from './components/MegaNav';
import { RecoilRoot } from 'recoil';
import { DndContext } from '@dnd-kit/core';
import { changeTicketStatusAndReturnNewBoardStatus } from './dbHanlder';

function App() {
  const [boardState, setBoardState] = useState(getBoardState());
  function handleDragEnd(event) {
    const { active, over } = event;
    let ticketId = active?.id;
    let newLaneId = over?.id;
    if (ticketId && newLaneId) {
      let newBoardState = changeTicketStatusAndReturnNewBoardStatus(ticketId, newLaneId);
      console.log('>> calling', newBoardState)
      setBoardState(newBoardState);
    }
  }

  useEffect(() => {
    console.log('>>>>> new boardState', boardState);
  }, [boardState])

  return (
    <BrowserRouter>
      <MegaNav />
      <Routes>
        <Route path='/' element={
          <Suspense fallback={'loading page rn..'}>
            <DndContext onDragEnd={handleDragEnd}>
              <RecoilRoot>
                <Board boardState={boardState} />
              </RecoilRoot>
            </DndContext>
          </Suspense>} />
        <Route path='/backlog' element={
          <Suspense fallback={'loading page rn..'}>
            <Backlog />
          </Suspense>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
