import styled from "styled-components";
import { Repo as IRepo } from "../../containers/GithubUser/GithubUser";
import Repo from "../Repo/Repo";

interface ReposGridProps {
  repos: IRepo[];
}

const STitle = styled.h2`
  font-weight: 500;
  font-size: 1.125rem;
  margin-bottom: ${(props) => props.theme.spacing[2]};
  letter-spacing: 0.15px;
`;
const SReposGridContainer = styled.section`
  padding: 0 ${(props) => props.theme.spacing[3]};
`;

const ReposGrid = (props: ReposGridProps) => {
  const { repos } = props;
  return (
    <SReposGridContainer>
      <STitle>Top repositories</STitle>
      {repos.map((repo) => (
        <Repo key={repo.id} name={repo.name} url={repo.html_url} />
      ))}
    </SReposGridContainer>
  );
};

export default ReposGrid;
