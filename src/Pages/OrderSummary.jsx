import React from 'react'
import SummaryDetail from '../Component/Purchase/Summary/SummaryDetail'

const OrderSummary = (props) => {
  const {handleButtonClick} = props
  return (
    <>
        <SummaryDetail handleButtonClick={handleButtonClick}/>

    </>
  )
}

export default OrderSummary