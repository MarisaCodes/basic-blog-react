import Loader from "./Loader";
import Error from "./Error";
import LoginForm from "./LoginForm";
import Wrapper from "./Wrapper";
import { useGetLogin } from "../hooks/useGetLogin";

const Login = () => {
  const data = useGetLogin();

  return (
    <Wrapper data={data}>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
