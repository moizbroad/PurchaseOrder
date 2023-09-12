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

  const handleCreateNewOrderClick = () => {
    // This function is called from PurchaseOrder
    handleButtonClick('createOrder');
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
        
         />)}

        {activeComponent === 'orderSummary' && (<OrderSummary handleButtonClick={handleButtonClick} 
        selectedRows={selectedRows} />)}
      </div>
    </div>
  );
};

export default AllOrder;
