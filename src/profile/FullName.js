import React from 'react'
import PropTypes from "prop-types";


const FullName = ({lastname,name}) => {

  return (
    <div className='ok'>
        <h1>FullName: </h1>
        <p>{lastname} {name}</p>
        
    </div>
  )
}

FullName.defaultProps={
  lastname :'1',
  name :'Student',
};


FullName.prototype={
 lastname: PropTypes.string,
 name: PropTypes.string,
};

export default FullName 

