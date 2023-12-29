import styled from "styled-components";
import SignUp from "./rhf_signup/components/sign-up";
import SignUpSchema from "./yup_singup/components/sign-up-schema";

const HomePage = () => {
  const step1 = [
    {
      label: "이메일",
      id: "email",
      type: "email",
      placeholder: "이메일을 입력해주세요.",
    },
    { label: "비밀번호", id: "password", type: "password", placeholder: "비밀번호를 입력해주세요." },
  ];
  const step2 = [
    {
      label: "휴대폰번호",
      id: "phone",
      type: "text",
      placeholder: "휴대폰번호를 입력해주세요.",
    },
    { label: "생년월일", id: "birthday", type: "date", placeholder: "생년월일을 입력해주세요." },
  ];
  const step3 = [{ label: "하고싶은말", id: "text", placeholder: "하고싶은말을 입력해주세요." }];
  return (
    <Wrapper>
      <div>
        <h2>회원가입(yup 사용x)</h2>
        <SignUp step1={step1} step2={step2} step3={step3} />
      </div>
      {/* <div>
        <h2>회원가입(yup 사용)</h2>
        <SignUpSchema />
      </div> */}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  & > div {
    margin: 100px;
  }
`;
