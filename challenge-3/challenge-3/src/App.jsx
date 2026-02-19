import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SongsPage from './pages/SongsPage'
import BrowserPage from './pages/BrowserPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/browser" element={<BrowserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
