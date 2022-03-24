import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const Albums = (props) => {
  const [columnDefs] = useState([
    { field: 'id', resizable: true, sortable: true, filter: true },
    { field: 'userId', resizable: true, sortable: true, filter: true },
    { field: 'title', resizable: true, sortable: true, filter: true },
  ]);
  const [rowData, setRowData] = useState([]);

  const loadData = async () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then((result) => result.json())
        .then((rowData) => setRowData(rowData));
    } catch (e) {
      console.log('Error', e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleClick = () => {
    loadData();
  };

  return (
    <>
      <h3>Albums List</h3>
      <button className='btn btn-primary' onClick={handleClick}>
        Reload
      </button>
      <hr />
      <div className='ag-theme-alpine' style={{ height: 600, width: 700 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </>
  );
};

export default Albums;
