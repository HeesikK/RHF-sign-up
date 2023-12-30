import styled from "styled-components";
import SignUp from "./components/sign-up";

const SignUpFormPage = () => {
  return (
    <Wrapper>
      <div>
        <h2>회원가입(yup 사용x)</h2>
        <SignUp />
      </div>
    </Wrapper>
  );
};

export default SignUpFormPage;

const Wrapper = styled.div`
  display: flex;
  & > div {
    margin: 250px;
  }
`;
