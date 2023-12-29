import styled from "styled-components";
import { validate } from "../consts/validate";

const CustomTextArea = ({ id, label, register, errors, ...textareaProps }) => {
  return (
    <TextAreaBox>
      <Label htmlFor={id}>{label}</Label>
      <textarea id={id} {...textareaProps} {...register(id, validate[id])} />
      {errors[id] && <ValidateMessage>{errors[id].message}</ValidateMessage>}
    </TextAreaBox>
  );
};

export default CustomTextArea;

const TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  & > textarea {
    width: 250px;
    height: 100px;
    box-sizing: border-box;
    padding: 10px 10px;
    border-radius: 8px;
    border: 1px solid black;
    margin-top: 5px;
    &:focus {
      outline: none;
    }
  }
`;

const Label = styled.label`
  font-size: 12px;
`;

const ValidateMessage = styled.p`
  margin: 0px;
  color: red;
  font-size: 12px;
`;
