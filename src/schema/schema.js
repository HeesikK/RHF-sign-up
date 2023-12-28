import * as yup from "yup";

export const signIn_schema = yup.object().shape({
  email: yup
    .string()
    .required("이메일은 필수 입력입니다.")
    .matches(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i, "이메일 형식에 맞지 않습니다."),
  password: yup.string().required("비밀번호는 필수 입력입니다.").min(8, "비밀번호는 8자리 이상입니다."),
});

export const signUp_schema = yup.object().shape({
  email: yup
    .string()
    .required("이메일은 필수 입력입니다.")
    .matches(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i, "이메일 형식에 맞지 않습니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(/(?=.*?[a-z])(?=.*?[A-Z])/, "비밀번호는 대소문자 특수문자가 포함되어야 합니다.")
    .min(8, "비밀번호는 8자리 이상입니다"),
  birthday: yup.string().required("생년월일은 필수입니다"),
  text: yup.string().required("하고싶은말은 필수 입력입니다.").min(100, "100자 이상으로 작성해주세요.").max(300, "300자 이하로 작성해주세요."),
});

/*
https://velog.io/@win/react-hook-form-yup-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC%ED%95%98%EA%B8%B0
 */
