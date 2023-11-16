import React, {useState} from 'react';
import DesingButton from "./DesingButton";

const SizeSelector = () => {
  const sizes = [6,7,8,9,10,11,12,13]
  const [selectedSize, setSize] = useState()

  return (
    <div className={''}>
      {sizes.map((size) => {
        return <DesingButton isSelected={selectedSize === size} onClick={()=>setSize(size)}>
          <h6>UK {size}</h6>
        </DesingButton>
      })}
    </div>
  );
};

export default SizeSelector;