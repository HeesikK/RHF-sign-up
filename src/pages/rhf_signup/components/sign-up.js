import { useForm } from "react-hook-form";
import styled from "styled-components";
import CustomInput from "../../../components/input";
import CustomTextArea from "../../../components/textarea";
import { useNavigate } from "react-router-dom";

const SignUp = ({ step1, step2, step3 }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  // const navigate = useNavigate();

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 100));
        alert(JSON.stringify(data));
      })}
    >
      {/* 이메일&비밀번호 */}
      {step1.map((el) => (
        <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />
      ))}
      {/* 휴대폰번호&생년월일 */}
      {step2.map((el) => (
        <CustomInput label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />
      ))}
      {/* 하고싶은말 */}
      {step3.map((el) => (
        <CustomTextArea label={el.label} id={el.id} placeholder={el.placeholder} register={register} errors={errors} />
      ))}
      {/* isSubmitting 메서드를 사용해서 중복 제출 방지 */}
      <S.Button type="submit" disabled={isSubmitting}>
        회원가입
      </S.Button>
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
