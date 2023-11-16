import React from 'react';

const Presentation = (props) => {
  const {photo, color} = props
  let circleColor = ''
  // ❌ Usar un valor dinamico sin haber utilizado una clase de Tailwind similar
  // <div id={'circulo'} className={`bg-[${color}]`}>{color}</div>

  // ❌ usar una variable que contiene un valor dinamico
  // const color = `bg-[${color}]`;

  // ✅ referenciar una clase de tailwind segun la condición.
  if (color === 'red') {
    circleColor = `bg-[#FB3535]`;
  }
  if (color === 'yellow') {
    circleColor = `bg-[#E4C000]`;
  }
  if (color === 'blue') {
    circleColor = `bg-[#4B81F4]`;
  }

  return (
    <div id={'card-presentation'} className={''}>
      <img src={photo} alt={'shoe'}/>
      <div id={'circulo'} className={`${circleColor}`}>{color}</div>
    </div>
  );
};

export default Presentation;