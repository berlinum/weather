import React from "react";
import styled from "@emotion/styled";

const CurrentData = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  font-size: 180px;
`;

const Description = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
`;

function CurrentWeather(props) {
  return (
    <CurrentData>
      {props.temp}
      <span>&#176;</span>
      <Description>{props.description}</Description>
    </CurrentData>
  );
}

export default CurrentWeather;
