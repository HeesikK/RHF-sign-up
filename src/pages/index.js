import styled from "styled-components";
import SignUp from "./rhf_signup/components/sign-up";
import SignUpSchema from "./yup_singup/components/sign-up-schema";

const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <h2>회원가입(yup 사용x)</h2>
        <SignUp />
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
