import React from "react";
import styled from "@emotion/styled";

const Grad = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 10px;
  text-align: center;
  font-size: 180px;
`;

function Temp(props) {
  return <Grad>{props.temp}</Grad>;
}

export default Temp;
