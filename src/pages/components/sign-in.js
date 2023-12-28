import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn_schema } from "../../schema/schema";

const SignIn = () => {
  // useForm 훅에 register 메서드를 통해 input 연결
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(signIn_schema) });

  return (
    <form noValidate onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <label htmlFor="email">이메일</label>
      <input id="email" type="email" placeholder="이메일을 입력해주세요" {...register("email")} />
      {/* errors 객체 안에 email값이 있다면 error message 출력 */}
      {errors.email && <div>{errors.email.message}</div>}
      <label htmlFor="password">패스워드</label>
      <input id="password" type="password" placeholder="비밀번호를 입력해주세요" {...register("password")} />
      {/* errors 객체 안에 password값이 있다면 error message 출력 */}
      {errors.password && <div>{errors.password.message}</div>}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default SignIn;
