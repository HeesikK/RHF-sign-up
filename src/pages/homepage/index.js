import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/sign-up");
  };

  const goToSignUpSchemaPage = () => {
    navigate("/sign-up-schema");
  };
  return (
    <>
      <button onClick={goToSignUpPage}>회원가입</button>
      <button onClick={goToSignUpSchemaPage}>회원가입</button>
    </>
  );
};

export default HomePage;
