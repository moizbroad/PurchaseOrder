import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AllOrder from './Pages/AllOrder'






const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllOrder />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App