// import styled from "styled-components";
// import SignUp from "./components/sign-up";
// import { useSearchParams } from "react-router-dom";
// import { signUpStep } from "../../consts/step";

// const SignUpFormPage = () => {
//   const [keyword] = useSearchParams();
//   const stepNumber = keyword.get("step");
//   const step = stepNumber == null ? signUpStep.step1 : stepNumber == 2 ? signUpStep.step2 : signUpStep.step3;

//   return (
//     <Wrapper>
//       <div>
//         <h2>회원가입(yup 사용x)</h2>
//         <SignUp step={step} stepNumber={stepNumber} />
//       </div>
//     </Wrapper>
//   );
// };

// export default SignUpFormPage;

// const Wrapper = styled.div`
//   display: flex;
//   & > div {
//     margin: 250px;
//   }
// `;
