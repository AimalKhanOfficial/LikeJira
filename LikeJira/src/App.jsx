import { useState, lazy, Suspense } from 'react';
import Board from './components/Board';
import './index.css'
import { getBoardState } from './dbHanlder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Backlog = lazy(() => import('./components/Backlog'));
import MegaNav from './components/MegaNav';
import { RecoilRoot } from 'recoil';
function App() {
  const [boardState, setBoardState] = useState(getBoardState());
  return (
    <BrowserRouter>
      <MegaNav />
      <Routes>
        <Route path='/' element={

          <Suspense fallback={'loading page rn..'}>
            <RecoilRoot><Board boardState={boardState} /></RecoilRoot>
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
