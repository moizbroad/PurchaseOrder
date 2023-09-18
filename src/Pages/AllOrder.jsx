import React, { useState, useEffect } from 'react';
import CreateOrder from './CreateOrder';
import PurchaseOrder from './PurchaseOrder';
import OrderSummary from './OrderSummary';

const AllOrder = () => {
  const [activeComponent, setActiveComponent] = useState('purchaseOrder');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState({ id: '', label: '' });
  // stored custom text field data 
  const [orderTitle, setOrderTitle] = useState('');

  // field data 
  const [field, setField] = useState();

  const [field2, setField2] = useState();


  // table data 
  const [search, setSearch] = useState("");


  useEffect(() => {
    if (activeComponent === 'purchaseOrder') {
      handleResetStates()
    }
  }, [activeComponent])

  const handleResetStates = () => {
    setOrderTitle(''); // Clear the orderTitle state
    setSelectedRows([])
    setSelectedSupplier({ id: '', label: '' })
    setField("")
    setField2("")

  };
  const handleSupplierSelection = (selectedData) => {
    setSelectedSupplier(selectedData);
  };


  return (
    <div>


      <div>
        {activeComponent === 'purchaseOrder' && (
          <PurchaseOrder handleButtonClick={handleButtonClick}
          
          // search data 
          search={search}
          setSearch={setSearch}

          />
        )}
        {activeComponent === 'createOrder' && (<CreateOrder handleButtonClick={handleButtonClick}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          handleSupplierSelection={handleSupplierSelection}
          setSelectedSupplier={setSelectedSupplier}
          selectedSupplier={selectedSupplier}

          orderTitle={orderTitle}
          setOrderTitle={setOrderTitle}

          field={field}
          setField={setField}
          field2={field2}
          setField2={setField2}

            
        />)}



        {activeComponent === 'orderSummary' && (<OrderSummary handleButtonClick={handleButtonClick}

          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          selectedSupplier={selectedSupplier}

          field={field}
          setField={setField}
          field2={field2}
          setField2={setField2}
        />)}
      </div>
    </div>
  );
};

export default AllOrder;
