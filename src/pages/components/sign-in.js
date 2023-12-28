import { useForm } from "react-hook-form";

const SignIn = () => {
  // useForm 훅에 register 메서드를 통해 input 연결
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <form noValidate onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요"
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {/* errors 객체 안에 email값이 있다면 error message 출력 */}
      {errors.email && <div>{errors.email.message}</div>}
      <label htmlFor="password">패스워드</label>
      <input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "비밀번호는 8자리 이상입니다.",
          },
        })}
      />
      {/* errors 객체 안에 password값이 있다면 error message 출력 */}
      {errors.password && <div>{errors.password.message}</div>}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default SignIn;
