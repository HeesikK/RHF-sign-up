import { useForm } from "react-hook-form";
import styled from "styled-components";
import CustomInput from "../../../components/input";
import CustomTextArea from "../../../components/textarea";
import { useNavigate, useSearchParams } from "react-router-dom";

const SignUp = ({ step1, step2, step3 }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [keyword] = useSearchParams();
  console.log("param값은?", keyword.get("step"));

  const onSubmitForm = (data) => {
    keyword.get("step") === null ? navigate(`/sign-up?step=2`) : navigate(`/sign-up?step=3`);
    alert(JSON.stringify(data));
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
      {/* 이메일&비밀번호 */}
      {keyword.get("step") === null
        ? step1.map((el) => <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />)
        : step2.map((el) => <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />)}
      {/* {step1.map((el) => (
        <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />
      ))} */}
      {/* 휴대폰번호&생년월일 */}
      {/* {step2.map((el) => (
        <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />
      ))} */}
      {/* 하고싶은말 */}
      {/* {step3.map((el) => (
        <CustomTextArea label={el.label} id={el.id} placeholder={el.placeholder} register={register} errors={errors} />
      ))} */}
      {/* isSubmitting 메서드를 사용해서 중복 제출 방지 */}
      <S.Button>{keyword.get("step") === 3 ? "회원가입" : "다음"}</S.Button>
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
