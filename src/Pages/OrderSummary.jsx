import React from 'react'
import SummaryDetail from '../Component/Purchase/Summary/SummaryDetail'

const OrderSummary = (props) => {
  const { handleButtonClick,
    selectedRows,
    setSelectedRows,
    setSelectedSupplier,
    selectedSupplier,
    orderTitle,
    setOrderTitle,
    setField,
    field,
    field2,
    setField2

  } = props

  //const {selectedRowsData} = props
  return (
    <>
      <SummaryDetail handleButtonClick={handleButtonClick}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}

        selectedSupplier={selectedSupplier}

        orderTitle={orderTitle}
        setOrderTitle={setOrderTitle}
        setField={setField}
        field2={field2}
        setField2={setField2}
        field={field}
      />

    </>
  )
}

export default OrderSummary