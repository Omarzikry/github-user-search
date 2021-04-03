import styled from "styled-components";
import GithubUser from "../GithubUser/GithubUser";

const SApp = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 769px) {
    width: 100%;
    max-width: 900px;
  }
`;

const App = () => {
  return (
    <SApp>
      <GithubUser />
    </SApp>
  );
};

export default App;
