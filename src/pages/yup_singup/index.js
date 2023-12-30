import styled from "styled-components";
import SignUp_Yup from "./components/sign-up-schema";

const SignUpFormPage_Yup = () => {
  return (
    <Wrapper>
      <div>
        <h2>회원가입(yup 사용x)</h2>
        <SignUp_Yup />
      </div>
    </Wrapper>
  );
};

export default SignUpFormPage_Yup;

const Wrapper = styled.div`
  display: flex;
  & > div {
    margin: 250px;
  }
`;
