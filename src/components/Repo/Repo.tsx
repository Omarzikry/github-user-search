import styled from "styled-components";

const SRepo = styled.a`
  width: 100%;
  box-shadow: 0px 2px 7px ${(props) => props.theme.colors.shadow};
  padding: ${(props) => props.theme.spacing[2]};
  display: block;
  border-radius: 0.75rem;
  margin-bottom: ${(props) => props.theme.spacing[2]};
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
`;

interface RepoProps {
  name: string;
  url: string;
}

const Repo = (props: RepoProps) => {
  const { name, url } = props;
  return (
    <SRepo href={url} target="_blank" rel="noreferrer">
      <p>{name}</p>
    </SRepo>
  );
};

export default Repo;
