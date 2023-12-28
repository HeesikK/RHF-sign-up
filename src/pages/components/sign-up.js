import { useForm } from "react-hook-form";
import styled from "styled-components";
import { schema } from "../../schema/schema";

const SignUp = () => {
  {
    /* 
    아이디, 비밀번호, 연락처, 생년월일, 하고싶은말 
    */
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
      {/* 이메일 */}
      {/* aria-invalid 적용이 왜 안되는걸까.. */}
      <S.InputBox>
        <label htmlFor="email">이메일</label>
        <S.Input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일은 필수입니다.",
            pattern: {
              value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <S.ErrorBox>{errors.email.message}</S.ErrorBox>}
      </S.InputBox>
      {/* 비밀번호 */}
      <S.InputBox>
        <label htmlFor="password">비밀번호</label>
        <S.Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "비밀번호는 필수입니다.",
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
      {/* 휴대폰 번호 */}
      <S.InputBox>
        <label htmlFor="number">휴대폰 번호</label>
        <S.Input id="number" type="text" placeholder="연락처를 입력해주세요." {...register("number")} />
      </S.InputBox>
      {/* 생년월일 */}
      <S.InputBox>
        <label htmlFor="birthday">생년월일</label>
        <S.Input
          id="birthday"
          type="date"
          placeholder="생년월일을 입력해주세요."
          {...register("birthday", {
            required: "생년월일은 필수입니다",
          })}
        />
        {errors.birthday && <S.ErrorBox>{errors.birthday.message}</S.ErrorBox>}
      </S.InputBox>
      {/* 하고싶은말 */}
      <S.InputBox>
        <label htmlFor="text">하고싶은말</label>
        <S.TextArea
          id="text"
          {...register("text", {
            required: "하고싶은말은 필수입니다",
            minLength: {
              value: 100,
              message: "100자 이상으로 작성해주세요.",
            },
            maxLength: {
              value: 300,
              message: "300자 이하로 작성해주세요.",
            },
          })}
        />
        {errors.text && <S.ErrorBox>{errors.text.message}</S.ErrorBox>}
      </S.InputBox>
      {/* isSubmitting 메서드를 사용해서 중복 제출 방지 */}
      <S.Button type="submit" disabled={isSubmitting}>
        회원가입
      </S.Button>
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

const Button = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 10px;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 80px;
`;

const ErrorBox = styled.div`
  font-size: 12px;
  color: red;
`;

const S = {
  InputBox,
  Input,
  Button,
  TextArea,
  ErrorBox,
};
