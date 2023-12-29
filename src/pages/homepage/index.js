import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/sign-up");
  };
  return <button onClick={goToSignUpPage}>회원가입</button>;
};

export default HomePage;
