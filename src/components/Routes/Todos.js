import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Todos = (props) => {
  const [columnDefs] = useState([
    { field: 'id', resizable: true, sortable: true, filter: true },
    { field: 'userId', resizable: true, sortable: true, filter: true },
    { field: 'title', resizable: true, sortable: true, filter: true },
    {
      field: 'completed',
      valueGetter: function addressModify(params) {
        return params.data.completed.toString();
      },
    },
  ]);
  const [rowData, setRowData] = useState([]);

  const loadData = async () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/todos')
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
      <h3>Todo's List</h3>
      <button className='btn btn-primary' onClick={handleClick}>
        Reload
      </button>
      <hr />
      <div className='ag-theme-alpine' style={{ height: 600, width: 750 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </>
  );
};

export default Todos;
