import { useGetSignup } from "../hooks/useGetSignup";
import Loader from "./Loader";
import SignupForm from "./SignupForm";
import Wrapper from "./Wrapper";
import Error from "./Error";
const Signup = () => {
  const data = useGetSignup();

  return (
    <Wrapper data={data}>
      <SignupForm />
    </Wrapper>
  );
};

export default Signup;
