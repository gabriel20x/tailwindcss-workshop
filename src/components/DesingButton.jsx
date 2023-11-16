import React from 'react';


const DesingButton = (props) => {
  const {children, onClick, isSelected} = props
  return (
    <button className={`${isSelected && ('')}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default DesingButton;