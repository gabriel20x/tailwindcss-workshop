import React from 'react';

const Description = (props) => {
  const {name} = props
  return (
    <article className={''}>
      <span className={''}>
        <h2>{name}</h2>
        <h3>15 $</h3>
      </span>
      <p className={''}>
        Este zapato está diseñado para adaptarse a tu pie y brindarte una sensación de ligereza y flexibilidad.
        Tiene una suela de goma antideslizante que te permite correr, saltar y girar con facilidad.
        Además, tiene un sistema de amortiguación que absorbe los impactos y protege tus articulaciones.
        Te brindamos un diseño moderno y atractivo, con colores vibrantes.
      </p>
    </article>
  );
};

export default Description;