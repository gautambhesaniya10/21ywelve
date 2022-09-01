import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

const ButtonMDBBtn = ({ color, style, onClick, name }) => {
  return (
    <MDBBtn color={color} style={style} onClick={onClick}>
      {name}
    </MDBBtn>
  );
};

export default ButtonMDBBtn;
