import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import SignUpSchema from "./components/sign-up-schema";

const HomePage = () => {
  return (
    <>
      <h2>로그인(yup 사용)</h2>
      <SignIn />
      <h2>회원가입(yup 사용x)</h2>
      <SignUp />
      <h2>회원가입(yup 사용)</h2>
      <SignUpSchema />
    </>
  );
};

export default HomePage;
