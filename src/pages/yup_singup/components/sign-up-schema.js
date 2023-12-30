import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CustomInput } from "../../../components/input";
import { useSearchParams } from "react-router-dom";
import { signUpStep } from "../../../consts/step";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../consts/schema";
const SignUp_Yup = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let step = searchParams.get("step") ?? "1";
  const numberStep = Number(step);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema[step - 1]) });

  const onSubmitForm = (data) => {
    if (numberStep > signUpStep.length) throw new Error("마지막 페이지임");
    if (numberStep === signUpStep.length) return alert(JSON.stringify(data));
    let nextStep = numberStep + 1;
    setSearchParams({ step: nextStep });
  };

  console.log("step의 값과 타입은?", step, typeof step);
  console.log(signUpStep.length, typeof signUpStep.length);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
      {signUpStep[step - 1].map((el) => (
        <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />
      ))}
      <S.Button>다음</S.Button>
    </form>
  );
};

export default SignUp_Yup;

const Button = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 10px;
`;

const S = {
  Button,
};

// 삼항 연산자를 여러개 써서 가독성을 해치지 말고 옵셔널 체이닝을 사용해보자.
// "??" 연산자를 사용해서 searchParams.get("step")의 값이 없으면 default 값으로 1을 지정
