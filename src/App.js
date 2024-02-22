import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './components/Landing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
