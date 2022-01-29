import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Container from "./Container";
import {
  Button,
  Input,
  Output,
  InputForm,
  OutputForm,
  SaveForm,
} from "./Styled";

export default function BoxContainer() {
  let history = useNavigate();
  const { id } = useParams();
  const [boxes, setBoxes] = useState([
    {
      type: "container",
      items: [],
    },
  ]);
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
  const handleSave = async () => {
    try {
      await fetch(`https://boxcom2.herokuapp.com/boxes`, {
        method: "POST",
        body: JSON.stringify({ type: "container", items: boxes }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            history.push("/" + data?.id);
          }
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <React.Fragment>
      <Container boxes={boxes} parent={boxes} />
      <InputForm>
        <Input onChange={(e) => handleInput(e)} />{" "}
        <Button onClick={(e) => handleInputBuild(e)}>Build</Button>
      </InputForm>
      <OutputForm>
        <Button onClick={() => handleOutput()}>Create JSON</Button>{" "}
        <Output>
          <p>{jsonOutput}</p>
        </Output>
      </OutputForm>
      <SaveForm>
        <Button onClick={() => handleSave()}>Save</Button>
      </SaveForm>
    </React.Fragment>
  );
}
