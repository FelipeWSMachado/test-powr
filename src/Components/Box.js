import { useState } from "react";
import { ChromePicker } from "react-color";
import { StyledBox } from "./Styled";

export default function Box({ data, pickColor, index }) {
  const [show, setShow] = useState(false);
  return (
    <StyledBox bgColor={data?.color || "orange"} onClick={() => setShow(true)}>
      {show && (
        <ChromePicker
          color={data?.color || "orange"}
          onChange={(color) => pickColor(color, index)}
          onChangeComplete={() => setShow(false)}
        />
      )}
    </StyledBox>
  );
}
