import React from 'react';
import {SHOES} from "../data/mock_data";
import DesingButton from "./DesingButton";

const ButtonsContainer = (props) => {
  const {selectShoe, actualShoe} = props
  return (
    <div className={''}>
      {Object.entries(SHOES).map(([shoeKey, shoe])=>{
        return <DesingButton onClick={() => selectShoe(shoeKey)} isSelected={actualShoe.id === shoe.id}>
          <img src={shoe.photo} alt={'shoe'}/>
        </DesingButton>
      })}
    </div>
  );
};

export default ButtonsContainer;