import React from 'react'
import OrderHeader from '../Component/Purchase/Create/OrderHeader'
import ProductTable from '../Component/Purchase/Create/ProductTable'
import OrderDetails from '../Component/Purchase/Create/OrderDetails'

const CreateOrder = (props) => {
  const {handleButtonClick ,selectedRows,setSelectedRows,selectedSupplier,setSelectedSupplier}=props
 
  return (
    <>
    <OrderHeader  handleButtonClick={handleButtonClick}
    setSelectedSupplier={setSelectedSupplier}
    selectedSupplier={selectedSupplier}/>


    <ProductTable 
     selectedRows={selectedRows}
    setSelectedRows={setSelectedRows} 
    />
    
    <OrderDetails handleButtonClick={handleButtonClick}
    
    />
    </>
  )
}

export default CreateOrder