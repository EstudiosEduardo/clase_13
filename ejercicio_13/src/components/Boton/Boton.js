import React from "react";
import Button from "react-bootstrap/Button";

export default function Boton(props) {
  return (
    <Button className="m-3" variant="primary">
      {props.title}
    </Button>
  );
}
