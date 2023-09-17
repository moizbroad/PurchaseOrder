import React from 'react'
import OrderHeader from '../Component/Purchase/Create/OrderHeader'
import ProductTable from '../Component/Purchase/Create/ProductTable'
import OrderDetails from '../Component/Purchase/Create/OrderDetails'

const CreateOrder = (props) => {
  const { handleButtonClick,
    selectedRows,
    setSelectedRows,
    selectedSupplier,
    setSelectedSupplier,
    orderTitle,
    setOrderTitle,
    handleCreateNewOrderClick,
    setField,
    field,
    field2,
    setField2
  } = props

  return (
    <>
      <OrderHeader handleButtonClick={handleButtonClick}
        setSelectedSupplier={setSelectedSupplier}
        selectedSupplier={selectedSupplier}

        orderTitle={orderTitle}
        setOrderTitle={setOrderTitle}
      // onClick={handleCreateNewOrderClick}
      />


      <ProductTable
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />

      <OrderDetails handleButtonClick={handleButtonClick}

        field={field}
        setField={setField}
        field2={field2}
        setField2={setField2}



      />
    </>
  )
}

export default CreateOrder