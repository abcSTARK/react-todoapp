import React from 'react';

const NotFound = (props) => {
  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Not Found</h1>
          <p className='lead'>Resource not found!</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
