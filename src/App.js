import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import AppHeader from "./components/AppHeader";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppHeader />
      <Main>
        <InputForm />
        <WeatherInfo />
      </Main>
    </>
  );
}

export default App;
