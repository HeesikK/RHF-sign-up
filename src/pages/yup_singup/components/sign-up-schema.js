// import { useForm } from "react-hook-form";
// import styled from "styled-components";
// import { CustomInput_Schema } from "../../../components/input";
// import { useNavigate } from "react-router-dom";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { schema } from "../../../consts/schema";

// const SignUp_Schema = ({ step, stepNumber }) => {
//   const schemaType = stepNumber === null ? "step1" : stepNumber === 2 ? "step2" : "step3";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ mode: "onChange", resolver: yupResolver(schema[schemaType]) });

//   const navigate = useNavigate();

//   const onSubmitForm = (data) => {
//     stepNumber === null ? navigate(`/sign-up-schema?step=2`) : navigate(`/sign-up-schema?step=3`);
//     alert(JSON.stringify(data));
//   };

//   // console.log(schemaType);

//   return (
//     <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
//       {step.map((el) => (
//         <CustomInput_Schema label={el.label} id={el.id} type={el.type} placeholder={el.placeholder} register={register} errors={errors} />
//       ))}
//       <S.Button>다음</S.Button>
//     </form>
//   );
// };

// export default SignUp_Schema;

// const Button = styled.button`
//   width: 250px;
//   height: 40px;
//   margin-top: 10px;
// `;

// const S = {
//   Button,
// };
