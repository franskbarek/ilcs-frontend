import React from 'react';
import DataUtama from './components/DataUtama';
import DataEntitas from './components/DataEntitas';
import DataPungutan from './components/DataPungutan';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<DataUtama />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/data-entitas" element={<DataEntitas />} />
          <Route path="/data-pungutan" element={<DataEntitas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
