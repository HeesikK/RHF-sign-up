import styled from "styled-components";
import SignUp from "./components/sign-up";
import { useSearchParams } from "react-router-dom";
import { step1, step2, step3 } from "../../consts/step";

const SignUpFormPage = () => {
  const [keyword] = useSearchParams();
  const step = keyword.get("step") == null ? step1 : keyword.get("step") == 2 ? step2 : step3;

  return (
    <Wrapper>
      <div>
        <h2>회원가입(yup 사용x)</h2>
        <SignUp step1={step1} step2={step2} step3={step3} step={step} />
      </div>
      {/* <div>
        <h2>회원가입(yup 사용)</h2>
        <SignUpSchema />
      </div> */}
    </Wrapper>
  );
};

export default SignUpFormPage;

const Wrapper = styled.div`
  display: flex;
  & > div {
    margin: 100px;
  }
`;
