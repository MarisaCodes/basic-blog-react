import { useGetSignup } from "../hooks/useGetSignup";
import Loader from "./Loader";
import Navbar from "./Navbar";
import SignupForm from "./SignupForm";
import Wrapper from "./Wrapper";
import Error from "./Error";
const SignupPage = () => {
  const data = useGetSignup();
  if (data.error !== null) return <Error error={data.error} />;
  if (data.data === null) return <Loader />;
  return (
    <Wrapper data={data}>
      <Navbar />
      <SignupForm />
    </Wrapper>
  );
};

export default SignupPage;
