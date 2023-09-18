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
    search,
    setSearch


  } = props

  // const handleIconClick = () => {
  //   handleButtonClick('purchaseOrder'); // Change the component name as needed
  // };



  return (
    <>
      <Header handleButtonClick={handleButtonClick}
        onClick={handleCreateNewOrderClick}
        search={search} setSearch={setSearch}  />
      <CustomTable search={search} setSearch={setSearch} />

    </>
  )
}

export default PurchaseOrder