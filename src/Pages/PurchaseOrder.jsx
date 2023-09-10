import React from 'react'
import Header from '../Component/Purchase/Header'
import CustomTable from '../Component/Purchase/CustomTable'

const PurchaseOrder = (props) => {
  const {handleButtonClick} = props
  return (
    <>
      <Header handleButtonClick={handleButtonClick} />
      <CustomTable />

    </>
  )
}

export default PurchaseOrder