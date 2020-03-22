import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import Loading from "./Loading";

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

const ContainerLoading = styled(Container)`
  background: transparent;
  justify-content: center;
`;

function WeatherInfo(props) {
  const [position, setPosition] = React.useState([]);
  const [weather, setWeather] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

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
      setIsLoading(true);
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=4cb6d24c77dc1d193c4815ae652e0186&query=${position.latitude},${position.longitude}`
      );
      const weather = await response.json();
      setWeather(weather);
      setIsLoading(false);
    }
    getWeather();
  }, [position.latitude, position.longitude]);

  React.useEffect(() => {
    // Get weather by input
    async function getWeather() {
      setIsLoading(true);
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=4cb6d24c77dc1d193c4815ae652e0186&query=${props.newInput}`
      );
      const weather = await response.json();
      setWeather(weather);
      setIsLoading(false);
    }
    getWeather();
  }, [props.newInput]);

  if (isLoading) {
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    );
  }

  return (
    <Container>
      <Location
        city={weather.location?.name}
        country={weather.location?.country}
      />
      <CurrentWeather
        temp={weather.current?.temperature}
        description={weather.current?.weather_descriptions}
      />
    </Container>
  );
}

export default WeatherInfo;
