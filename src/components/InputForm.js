import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 110px;
  font-family: SF;
`;

const Input = styled.input`
  width: 60%;
  height: 30px;
  padding: 0 10px;
  border: none;
  border-radius: 10px;
  font-family: SF;
  color: #707070;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background: lightsalmon;
  font-size: 27px;
  font-family: SF;
  color: #707070;
`;

function InputForm(props) {
  const [newCity, setNewCity] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(newCity);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your city"
        onChange={event => {
          setNewCity(event.target.value);
        }}
      ></Input>
      <Button>Go!</Button>
    </Form>
  );
}

export default InputForm;
