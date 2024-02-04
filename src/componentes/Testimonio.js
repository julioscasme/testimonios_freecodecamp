  import React from "react";
  import "../style/Testimonio.css";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function Testimonio(props){

    const imagenConMayuscula = capitalizeFirstLetter(props.imagen);

    return(

      <div className="contenedor-testimonio">
        <img className="imagen-testimonio"
            src={require(`../img/testimonio-${props.imagen}.png`)}
            alt = {`imagen de ${imagenConMayuscula}`}  />
        
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
      </div>
    );
  }
  export default Testimonio;