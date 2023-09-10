import React, { useState } from 'react';
import CreateOrder from './CreateOrder';
import PurchaseOrder from './PurchaseOrder';
import OrderSummary from './OrderSummary';

const AllOrder = () => {
  const [activeComponent, setActiveComponent] = useState('purchaseOrder');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleCreateNewOrderClick = () => {
    // This function is called from PurchaseOrder
    handleButtonClick('createOrder');
  };
 

  return (
    <div>
      <h1>All Orders</h1>
      <div>
        <button onClick={() => handleButtonClick('purchaseOrder')}>Purchase Order</button>
        <button onClick={() => handleButtonClick('createOrder')}>Create New Order</button>
        <button onClick={() => handleButtonClick('orderSummary')}>Order Summary</button>
      </div>
      <div>
        {activeComponent === 'purchaseOrder' && (
          <PurchaseOrder handleButtonClick={handleButtonClick} />
        )}
        {activeComponent === 'createOrder' && (<CreateOrder handleButtonClick={handleButtonClick}/>)}

        {activeComponent === 'orderSummary' && (<OrderSummary handleButtonClick={handleButtonClick} />)}
      </div>
    </div>
  );
};

export default AllOrder;
    