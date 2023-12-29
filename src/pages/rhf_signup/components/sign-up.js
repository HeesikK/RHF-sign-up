import { useForm } from "react-hook-form";
import styled from "styled-components";
import CustomInput from "../../../components/input";
import CustomTextArea from "../../../components/textarea";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 100));
        alert(JSON.stringify(data));
      })}
    >
      {/* 이메일 */}
      <CustomInput label={"이메일"} id={"email"} type={"email"} placeholder={"이메일을 입력해주세요."} register={register} errors={errors} />
      {/* 비밀번호 */}
      <CustomInput label={"비밀번호"} id={"password"} type={"password"} placeholder={"비밀번호를 입력해주세요."} register={register} errors={errors} />
      {/* 휴대폰 번호 */}
      <CustomInput label={"휴대폰번호"} id={"phone"} type={"text"} placeholder={"휴대폰번호를 입력해주세요."} register={register} errors={errors} />
      {/* 생년월일 */}
      <CustomInput label={"생년월일"} id={"birthday"} type={"date"} register={register} errors={errors} />
      {/* 하고싶은말 */}
      <CustomTextArea label={"하고싶은말"} id={"text"} placeholder={"하고싶은말을 입력해주세요."} register={register} errors={errors} />
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
