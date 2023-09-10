import React from 'react'
import OrderHeader from '../Component/Purchase/Create/OrderHeader'
import ProductTable from '../Component/Purchase/Create/ProductTable'
import OrderDetails from '../Component/Purchase/Create/OrderDetails'

const CreateOrder = (props) => {
  const {handleButtonClick}=props
  return (
    <>
    <OrderHeader/>
    <ProductTable/>
    <OrderDetails handleButtonClick={handleButtonClick}/>
    </>
  )
}

export default CreateOrder