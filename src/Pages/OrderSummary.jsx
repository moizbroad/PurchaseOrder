import React from 'react'
import SummaryDetail from '../Component/Purchase/Summary/SummaryDetail'

const OrderSummary = (props) => {
  const {handleButtonClick,selectedRows,setSelectedRows,setSelectedSupplier,selectedSupplier} = props
  
  //const {selectedRowsData} = props
  return (
    <>
        <SummaryDetail handleButtonClick={handleButtonClick}
        selectedRows={ selectedRows} 
        setSelectedRows={setSelectedRows}
       
    selectedSupplier={selectedSupplier}
        />

    </>
  )
}

export default OrderSummary