import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { sendItems, getItemsByID, updateItems } from "../API/api";
export default function BoxContainer() {
  const { id } = useParams();
  const [boxes, setBoxes] = useState([]);
  const [jsonInput, setJsonInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const getData = async () => {
    if (id) {
      await getItemsByID(id).then(({ data }) => {
        setBoxes(JSON.parse(data.items));
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
    if (!id) {
      await sendItems(JSON.stringify(boxes)).then(({ data }) => {
        alert("Object saved");
      });
    } else {
      await updateItems(JSON.stringify(boxes), id).then(({ data }) => {
        alert("Object saved");
      });
    }
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
          <Button onClick={handleSave}>Save</Button>
        </SaveForm>
      </FormContainer>
    </>
  );
}
