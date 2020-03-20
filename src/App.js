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
  const [position, setPosition] = React.useState([]);
  const [weather, setWeather] = React.useState([]);

  React.useEffect(() => {
    // Get location from browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const currentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        setPosition(currentPosition);
      });
    }
    // Get weather by current position
    async function getWeather() {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=4cb6d24c77dc1d193c4815ae652e0186&query=${position.latitude},${position.longitude}`
      );
      const weather = await response.json();
      setWeather(weather);
    }
    getWeather();
  }, [position.latitude, position.longitude]);

  console.log(weather);

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
