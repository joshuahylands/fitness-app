import Diary from '@pages/Diary';
import GoalsPage from '@pages/GoalsPage';
import Home from '@pages/Home';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="flex flex-col gap-8 my-8 mx-6">
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/diary/:date" element={<Diary/>}/>
            <Route path="/goals" element={<GoalsPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </StrictMode>
    
  );
}

createRoot(document.getElementById('root')!).render(<App/>);
