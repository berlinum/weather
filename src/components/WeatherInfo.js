import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Temp from "./Temp";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-width: 300px;
  height: 400px;
  background: lightsalmon;
  margin-top: 30px;
  border-radius: 20px;
`;

function WeatherInfo() {
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

  return (
    <Container>
      <Location
        city={weather.location?.name}
        country={weather.location?.country}
      />
      <Temp temp={weather.current?.temperature + "°"} />
    </Container>
  );
}

export default WeatherInfo;
