import { useForm } from "react-hook-form";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../../components/input";

const SignUp = ({ step, stepNumber }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const onSubmitForm = (data) => {
    stepNumber === null ? navigate(`/sign-up?step=2`) : navigate(`/sign-up?step=3`);
    alert(JSON.stringify(data));
  };

  console.log(stepNumber);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
      {step.map((el) => (
        <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />
      ))}
      <S.Button>다음</S.Button>
    </form>
  );
};

export default SignUp;

const Button = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 10px;
`;

const S = {
  Button,
};
