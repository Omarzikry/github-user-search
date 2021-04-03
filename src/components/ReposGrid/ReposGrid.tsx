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
  padding: 0 ${(props) => props.theme.spacing[3]};
`;
const SReposGridContainer = styled.section`
  padding: 0 ${(props) => props.theme.spacing[3]};
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${(props) => props.theme.spacing[2]};
  }
`;

const ReposGrid = (props: ReposGridProps) => {
  const { repos } = props;
  return (
    <>
      <STitle>Top repositories</STitle>
      <SReposGridContainer>
        {repos.map((repo) => (
          <Repo key={repo.id} name={repo.name} url={repo.html_url} />
        ))}
      </SReposGridContainer>
    </>
  );
};

export default ReposGrid;
