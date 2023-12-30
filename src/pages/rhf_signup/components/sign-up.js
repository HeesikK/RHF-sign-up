import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CustomInput } from "../../../components/input";
import { useSearchParams } from "react-router-dom";
import { signUpStep } from "../../../consts/step";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step") ?? "1";

  const onSubmitForm = (data) => {
    const stepNumber = Number(step) + 1;
    setSearchParams({ step: stepNumber });
    alert(JSON.stringify(data));
  };

  console.log("step의 값과 타입은?", step, typeof step);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
      {signUpStep[step - 1].map((el) => (
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
