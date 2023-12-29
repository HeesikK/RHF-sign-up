import { useForm } from "react-hook-form";
import styled from "styled-components";
import CustomInput from "../../../components/input";
import CustomTextArea from "../../../components/textarea";
import { useNavigate, useSearchParams } from "react-router-dom";

const SignUp = ({ step1, step2, step3, step }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const [keyword] = useSearchParams();
  console.log("param값은?", keyword.get("step"));

  const onSubmitForm = (data) => {
    console.log("hi");
    keyword.get("step") === null ? navigate(`/sign-up?step=2`) : navigate(`/sign-up?step=3`);
    alert(JSON.stringify(data));
  };
  console.log("현재 스탭값이 무엇일까요?", step);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
      {/* 이메일&비밀번호 */}
      {step.map((el) => (
        <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />
      ))}
      {/* isSubmitting 메서드를 사용해서 중복 제출 방지 */}
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
