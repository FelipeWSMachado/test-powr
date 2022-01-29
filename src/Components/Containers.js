import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "./Container";
import {
  Button,
  Input,
  Output,
  InputForm,
  OutputForm,
  SaveForm,
  FormContainer,
} from "./Styled";

export default function BoxContainer() {
  let history = useNavigate();
  const { id } = useParams();
  const [boxes, setBoxes] = useState([]);
  const [jsonInput, setJsonInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setJsonInput(e.target.value);
  };
  const handleInputBuild = (e) => {
    e.preventDefault();
    const input = JSON.parse(jsonInput);
    setBoxes(input?.items);
  };
  const handleOutput = () => {
    setJsonOutput(JSON.stringify({ type: "container", items: boxes }));
  };

  return (
    <>
      <Container boxes={boxes} parent={boxes} />
      <FormContainer>
        <OutputForm>
          <Button onClick={() => handleOutput()}>Create JSON</Button>{" "}
          <Output>
            <p>{jsonOutput}</p>
          </Output>
        </OutputForm>
        <InputForm>
          <Input onChange={(e) => handleInput(e)} />{" "}
          <Button onClick={(e) => handleInputBuild(e)}>Build</Button>
        </InputForm>
        <SaveForm>
          <Button>Save</Button>
        </SaveForm>
      </FormContainer>
    </>
  );
}
