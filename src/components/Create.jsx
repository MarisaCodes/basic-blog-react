import { useGetCreate } from "../hooks/useGetCreate";
import CreateForm from "./CreateForm";
import Wrapper from "./Wrapper";

const Create = () => {
  const data = useGetCreate();
  return (
    <Wrapper data={data}>
      <CreateForm />
    </Wrapper>
  );
};

export default Create;
