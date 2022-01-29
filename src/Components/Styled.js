import Styled from "styled-components";

const StyledBox = Styled.div`
  background: ${(props) => props.bgColor};
  flex: 0 0 auto;
 margin: 0.3%;
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin-right: 5px;
`;

const StyledContainer = Styled.div`
  background: white;
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  flex: 3;
`;

const Buttons = Styled.div`
  background: #4895ef;
  background: #ffffff;
  border: 1px solid #5390d9;
  color: black;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin: 10px;
`;

const Button = Styled.div`
  background: #ffffff;
  border: 1px solid #5390d9;
  border-radius: 5px;
  margin: 5px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  `;

const ButtonMenu = Styled.div`
  position: absolute;
  width: 100px;
  height: 72px;
  margin-top: -65px;
  margin-left: -60px;
`;
const InputForm = Styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 200px;
`;

const OutputForm = Styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 200px;
`;

const SaveForm = Styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 200px;

`;

const Input = Styled.textarea`
  width: 400px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid black;

 }
`;
const Output = Styled.div`
  flex-grow: 3; 
  padding-left: 10px;
  color: #333333;
  background: #f1f1f1;
`;
const FormContainer = Styled.div`
  display: flex;
  justify-content: space-around;
`;
export {
  FormContainer,
  StyledBox,
  StyledContainer,
  Button,
  ButtonMenu,
  Buttons,
  Input,
  Output,
  InputForm,
  OutputForm,
  SaveForm,
};
