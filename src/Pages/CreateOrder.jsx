import React from 'react'
import OrderHeader from '../Component/Purchase/Create/OrderHeader'
import ProductTable from '../Component/Purchase/Create/ProductTable'
import OrderDetails from '../Component/Purchase/Create/OrderDetails'

const CreateOrder = () => {
  return (
    <>
    <OrderHeader/>
    <ProductTable/>
    <OrderDetails/>
    </>
  )
}

export default CreateOrder