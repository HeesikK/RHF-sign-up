import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { signUpStep } from "../../consts/step";
import SignUp_Schema from "./components/sign-up-schema";

const SignUpFormPage = () => {
  const [keyword] = useSearchParams();
  const stepNumber = keyword.get("step");
  const step = stepNumber == null ? signUpStep.step1 : stepNumber == 2 ? signUpStep.step2 : signUpStep.step3;

  return (
    <Wrapper>
      <div>
        <h2>회원가입(yup 사용o)</h2>
        <SignUp_Schema step={step} stepNumber={stepNumber} />
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
