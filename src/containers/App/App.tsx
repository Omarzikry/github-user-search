import styled from "styled-components";
import GithubUser from "../GithubUser/GithubUser";

const SApp = styled.div`
  width: 376px;
  max-width: 100%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <SApp>
      <GithubUser />
    </SApp>
  );
};

export default App;
