import React, { useState } from 'react';
import CreateOrder from './CreateOrder';
import PurchaseOrder from './PurchaseOrder';
import OrderSummary from './OrderSummary';

const AllOrder = () => {
  const [activeComponent, setActiveComponent] = useState('purchaseOrder');

  const handleButtonClick = (componentName ) => {
   setActiveComponent(componentName);
  };

 const [ selectedRows  , setSelectedRows] = useState([]);
 const [selectedSupplier, setSelectedSupplier] = useState({ id: '', label: '' });
 // stored custom text field data 
 const [orderTitle, setOrderTitle] = useState('');

  const handleCreateNewOrderClick = () => {
    // This function is called from PurchaseOrder
    handleButtonClick('createOrder');
  };

  const handleSupplierSelection = (selectedData) => {
    setSelectedSupplier(selectedData);
  };


  return (
    <div>
      
     
      <div>
        {activeComponent === 'purchaseOrder' && (
          <PurchaseOrder handleButtonClick={handleButtonClick} />
        )}
        {activeComponent === 'createOrder' && (<CreateOrder handleButtonClick={handleButtonClick} 
        selectedRows={selectedRows} 
        setSelectedRows={setSelectedRows}
        handleSupplierSelection={handleSupplierSelection}
        setSelectedSupplier={setSelectedSupplier}
        selectedSupplier={selectedSupplier} 

        orderTitle={orderTitle}
        setOrderTitle={setOrderTitle}
         />)}
    
        {activeComponent === 'orderSummary' && (<OrderSummary handleButtonClick={handleButtonClick} 
        
        selectedRows={selectedRows} 
        setSelectedRows={setSelectedRows} 
        selectedSupplier={selectedSupplier} 
        />)}
      </div>
    </div>
  );
};

export default AllOrder;
