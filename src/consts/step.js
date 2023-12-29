export const signUpStep = {
  step1: [
    {
      label: "이메일",
      id: "email",
      type: "email",
      placeholder: "이메일을 입력해주세요.",
    },
    { label: "비밀번호", id: "password", type: "password", placeholder: "비밀번호를 입력해주세요." },
  ],
  step2: [
    {
      label: "휴대폰번호",
      id: "phone",
      type: "text",
      placeholder: "휴대폰번호를 입력해주세요.",
    },
    { label: "생년월일", id: "birthday", type: "date", placeholder: "생년월일을 입력해주세요." },
  ],
  step3: [{ label: "하고싶은말", id: "text", placeholder: "하고싶은말을 입력해주세요." }],
};
