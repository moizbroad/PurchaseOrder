import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PurchaseOrder from './Pages/PurchaseOrder'
import CreateOrder from './Pages/CreateOrder'
import OrderSummary from './Pages/OrderSummary'






const App = () => {
  return (
   
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<PurchaseOrder/>} />
        <Route path="/CreateOrder" element={<CreateOrder/>} />
        <Route path="/OrderSummary" element={<OrderSummary/>} />
       
      </Routes>
    </BrowserRouter>
  
  )
}

export default App