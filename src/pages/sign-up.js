import { useForm } from "react-hook-form";
import styled from "styled-components";

const SignUp = () => {
  {
    /* 아이디, 비밀번호, 연락처, 생년월일, 하고싶은말 */
  }
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
      <S.InputBox>
        <label htmlFor="email">이메일</label>
        <S.Input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <S.ErrorBox>{errors.email.message}</S.ErrorBox>}
      </S.InputBox>
      <S.InputBox>
        <label htmlFor="password">비밀번호</label>
        <S.Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            pattern: {
              value: /(?=.*?[a-z])(?=.*?[A-Z])/,
              message: "비밀번호는 대소문자 특수문자가 포함되어야 합니다.",
            },
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상입니다",
            },
          })}
        />
        {errors.password && <S.ErrorBox>{errors.password.message}</S.ErrorBox>}
      </S.InputBox>
      <S.InputBox>
        <label htmlFor="number">휴대폰 번호</label>
        <S.Input id="number" type="text" placeholder="연락처를 입력해주세요." {...register("number")} />
      </S.InputBox>
      <S.InputBox>
        <label htmlFor="birthday">생년월일</label>
        <S.Input id="birthday" type="text" placeholder="생년월일을 입력해주세요." {...register("birthday")} />
      </S.InputBox>
      <button type="submit" disabled={isSubmitting}>
        회원가입
      </button>
    </form>
  );
};

export default SignUp;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  padding: 0px 10px;
`;

const Button = styled.button``;

const ErrorBox = styled.div`
  font-size: 12px;
  color: red;
`;

const S = {
  InputBox,
  Input,
  Button,
  ErrorBox,
};
