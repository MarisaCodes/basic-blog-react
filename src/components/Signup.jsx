import { useGetSignup } from "../hooks/useGetSignup";
import SignupForm from "./SignupForm";
import Wrapper from "./Wrapper";
const Signup = () => {
  const data = useGetSignup();

  return (
    <Wrapper data={data}>
      <SignupForm />
    </Wrapper>
  );
};

export default Signup;
