import styled from "styled-components";
import { validate } from "../consts/validate";

export const CustomInput = ({ id, label, register, errors, ...inputProps }) => {
  return (
    <InputBox>
      <Label htmlFor={id}>{label}</Label>
      <input id={id} {...inputProps} {...register(id, validate[id])} />
      {errors[id] && <ValidateMessage>{errors[id].message}</ValidateMessage>}
    </InputBox>
  );
};

export const CustomInput_Schema = ({ id, label, register, errors, ...inputProps }) => {
  return (
    <InputBox>
      <Label htmlFor={id}>{label}</Label>
      <input id={id} {...inputProps} {...register(id)} />
      {errors[id] && <ValidateMessage>{errors[id].message}</ValidateMessage>}
    </InputBox>
  );
};

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  & > input {
    width: 250px;
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
