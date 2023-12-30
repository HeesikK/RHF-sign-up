import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/sign-up");
  };

  const goToSignUpSchemaPage = () => {
    navigate("/yup");
  };
  return (
    <>
      <button onClick={goToSignUpPage}>React Hook Form</button>
      <button onClick={goToSignUpSchemaPage}>Yup</button>
    </>
  );
};

export default HomePage;
