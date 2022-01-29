import React, { useState, useEffect } from "react";
import Box from "./Box";
import { StyledContainer, Button, ButtonMenu, Buttons } from "./Styled";

const Container = ({ boxes, parent }) => {
  const [showMenu, setShowMenu] = useState(false);

  const addBoxes = (box) => {
    boxes.push(box);
    setShowMenu(false);
  };

  const pickColor = (color, index) => {
    boxes[index].color = color.hex;
  };
  useEffect(() => {}, [boxes]);

  return (
    <StyledContainer>
      {boxes &&
        boxes.map((box, key) => {
          if (box?.type === "container") {
            return <Container boxes={box?.items} parent={parent} key={key} />;
          } else if (box?.type === "box") {
            return (
              <Box data={box} key={key} index={key} pickColor={pickColor} />
            );
          } else {
            return null;
          }
        })}

      <Buttons onMouseOver={() => setShowMenu(true)}>
        +
        {showMenu && (
          <ButtonMenu onMouseOut={() => setShowMenu(false)}>
            <Button onClick={() => addBoxes({ type: "box", color: "#ff9100" })}>
              Box
            </Button>
            <Button onClick={() => addBoxes({ type: "container", items: [] })}>
              Container
            </Button>
          </ButtonMenu>
        )}
      </Buttons>
    </StyledContainer>
  );
};

export default Container;
