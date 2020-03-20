import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  width: 100%;
  height: 120px;
  font-size: 50px;
  text-align: center;
  margin: 0;
  padding-top: 40px;
`;

function AppHeader() {
  return <Header>Weather</Header>;
}

export default AppHeader;
