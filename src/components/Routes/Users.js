import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// const Users = (props) => {
//   useEffect(() => {
//     axiosInstance
//       .get('/users')
//       .then((result) => {
//         console.log('Server', result.data);
//       })
//       .catch((e) => {
//         console.log('Error', e);
//       });
//   }, []);

const Users = (props) => {
  const [columnDefs] = useState([
    { field: 'id', resizable: true, sortable: true, filter: true },
    { field: 'name', resizable: true, sortable: true, filter: true },
    { field: 'username', resizable: true, sortable: true, filter: true },
    { field: 'email', resizable: true, sortable: true, filter: true },
    {
      field: 'address',
      valueGetter: function addressModify(params) {
        return params.data.address.street + ', ' + params.data.address.suite;
      },
    },
  ]);
  const [rowData, setRowData] = useState([]);

  const loadData = async () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
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
      <h3>Users List</h3>
      <button className='btn btn-primary' onClick={handleClick}>
        Reload
      </button>
      <hr />
      <div className='ag-theme-alpine' style={{ height: 500, width: 1100 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </>
  );
};

export default Users;
