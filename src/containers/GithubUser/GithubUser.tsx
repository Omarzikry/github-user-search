import { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import EmptyScreen from "../../components/EmptyScreen/EmptyScreen";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import ReposGrid from "../../components/ReposGrid/ReposGrid";
import UserInfo from "../../components/UserInfo/UserInfo";
import api from "../../utils/api";

const SErrorDisplay = styled.p`
  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.purple};
`;

export interface User {
  id: number;
  name: string;
  avatar: string | null;
  bio: string | null;
  url: string;
}

export interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const GithubUser = () => {
  // It would be better to manage state through redux but due to the project scope I believe that there is no reason to bring more complexity into it
  const [user, setUser] = useState<User | undefined>();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [err, setErr] = useState<string>("");
  const [isUserLoading, setIsUserLoading] = useState<boolean>(false);
  const [isReposLoading, setIsReposLoading] = useState<boolean>(false);

  const handleSearchSubmit = async (e: SyntheticEvent, searchTerm: string) => {
    e.preventDefault();
    setIsUserLoading(true);
    setIsReposLoading(true);
    setErr("");

    try {
      const res = await api.get(`/users/${searchTerm}`);

      setUser({
        id: res.data.id,
        name: res.data.name,
        avatar: res.data.avatar_url,
        bio: res.data.bio,
        url: res.data.html_url,
      });

      setIsUserLoading(false);
    } catch (err) {
      if (err.message === "Request failed with status code 404") {
        setErr("The user you typed is not found");
      } else {
        setErr("Something went wrong");
      }
      console.error(err);
      setUser(undefined);
      setRepos([]);
      setIsUserLoading(false);
    }

    // Getting repos
    try {
      const res = await api.get(`/users/${searchTerm}/repos`);

      const topThreeRepos = res.data
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 3);

      setRepos(topThreeRepos);

      setIsReposLoading(false);
    } catch (err) {
      console.error(err);
      setIsReposLoading(false);
    }
  };

  return (
    <>
      <Header handleSearchSubmit={handleSearchSubmit} />

      {err && <SErrorDisplay>{err}</SErrorDisplay>}

      {isUserLoading || isReposLoading ? (
        <Loader />
      ) : (
        <>
          {user && (
            <UserInfo
              image={user.avatar}
              userName={user.name}
              bio={user.bio}
              url={user.url}
            />
          )}
          {!err && !user && <EmptyScreen />}
          {repos.length ? <ReposGrid repos={repos} /> : null}
        </>
      )}
    </>
  );
};
export default GithubUser;
