import React from 'react'
import SummaryDetail from '../Component/Purchase/Summary/SummaryDetail'

const OrderSummary = (props) => {
  const {handleButtonClick} = props
  const {selectedRows} = props
  return (
    <>
        <SummaryDetail handleButtonClick={handleButtonClick}
        />

    </>
  )
}

export default OrderSummary