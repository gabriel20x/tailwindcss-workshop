import React from 'react';
import {ReactComponent as Heart} from "../assets/back_arrow.svg";
import {ReactComponent as BackArrow} from "../assets/heart.svg";

const CardContainer = (props) => {
  const {children} = props

  return (
    <div id={'card-container'}>
      <Heart/>
      <BackArrow/>
      {children}
    </div>
  );
};

export default CardContainer;