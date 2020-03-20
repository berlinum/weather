import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 110px;
`;

const Input = styled.input`
  width: 60%;
  height: 30px;
  padding: 0 10px;
  border: none;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: coral;
  font-size: 20px;
`;

function InputForm() {
  return (
    <Form>
      <Input placeholder="Enter your city"></Input>
      <Button>Go</Button>
    </Form>
  );
}

export default InputForm;
