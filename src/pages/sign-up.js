import { useForm } from "react-hook-form";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <form noValidate onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <label htmlFor="email">이메일</label>
      <input id="email" type="email" placeholder="이메일을 입력해주세요" {...register("email")} />
      <label htmlFor="password">패스워드</label>
      <input id="password" type="password" placeholder="비밀번호를 입력해주세요" {...register("password")} />
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default SingUp;
