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
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px #007aff;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background: #60bfae;
  font-size: 27px;
  font-family: SF;
  color: #598078;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px #007aff;
  }
  &:hover {
    color: #fff;
    background-color: #cfe6e1;
  }
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
