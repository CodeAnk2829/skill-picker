import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import LandingComponent from './components/LandingComponent';

function App() {
  return (<BrowserRouter>
    <Suspense fallback={"loading.."}>
      <Routes>
        <Route path="/" element={<LandingComponent />} />
      </Routes>
    </Suspense>
  </BrowserRouter>)
}

export default App
