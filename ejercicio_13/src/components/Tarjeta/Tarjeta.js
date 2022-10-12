import React, { Component } from "react";
import Imagen from "../Imagen/Imagen";
import Boton from "../Boton/Boton";

export default class Tarjeta extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <Imagen />
        <Boton title="Anterior" />
        <Boton title="Siguiente" />
      </>
    );
  }
}
