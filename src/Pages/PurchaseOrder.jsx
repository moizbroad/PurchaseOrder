import React from 'react'
import Header from '../Component/Purchase/Header'
import CustomTable from '../Component/Purchase/CustomTable'
// import OrderHeader from '../Component/Purchase/Create/OrderHeader'

const PurchaseOrder = (props) => {
  const { selectedRows,
    setSelectedRows,
    handleButtonClick,
    orderTitle,
    setOrderTitle,
    handleCreateNewOrderClick,
 
  } = props

  // const handleIconClick = () => {
  //   handleButtonClick('purchaseOrder'); // Change the component name as needed
  // };



  return (
    <>
      <Header handleButtonClick={handleButtonClick}
      onClick={handleCreateNewOrderClick} />
      <CustomTable />

    </>
  )
}

export default PurchaseOrder