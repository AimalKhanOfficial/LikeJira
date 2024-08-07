import { useState, lazy, Suspense } from 'react';
import Board from './components/Board';
import './index.css'
import { getBoardState } from './dbHanlder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Backlog = lazy(() => import('./components/Backlog'));
import MegaNav from './components/MegaNav';
function App() {
  const [boardState, setBoardState] = useState(getBoardState());
  return (
    <div>

      <BrowserRouter>
        <MegaNav />
        <Routes>
          <Route path='/' element={<Board boardState={boardState} />} />
          <Route path='/backlog' element={
            <Suspense fallback={'loading page rn..'}>
              <Backlog />
            </Suspense>}
          />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
