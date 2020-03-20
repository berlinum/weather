import React from "react";
import styled from "@emotion/styled";

const CurrentLocation = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 120px;
`;

const City = styled(CurrentLocation)`
  height: 90px;
  font-size: 50px;
`;

const Country = styled(City)`
  height: 60px;
  padding-left: 23px;
  font-size: 20px;
`;

function Location(props) {
  return (
    <CurrentLocation>
      <City>{props.city}</City>
      <Country>{props.country}</Country>
    </CurrentLocation>
  );
}

export default Location;
