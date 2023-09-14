import React from 'react'
import SummaryDetail from '../Component/Purchase/Summary/SummaryDetail'

const OrderSummary = (props) => {
  const {handleButtonClick} = props
  const {selectedRows} = props
  const {setSelectedRows} = props
  //const {selectedRowsData} = props
  return (
    <>
        <SummaryDetail handleButtonClick={handleButtonClick}
        selectedRows={ selectedRows} 
        setSelectedRows={setSelectedRows}
        />

    </>
  )
}

export default OrderSummary