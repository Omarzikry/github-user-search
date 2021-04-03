import styled from "styled-components";

const SUserInfo = styled.section`
  padding: ${(props) => props.theme.spacing[3]};
  padding-bottom: ${(props) => props.theme.spacing[5]};
`;

const SUserHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing[3]};
  a {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.33em;
    margin-left: ${(props) => props.theme.spacing[3]};
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;
    span {
      display: block;
    }
  }
  @media (min-width: 769px) {
    a {
      font-size: 2rem;
    }
  }
`;

const SImgContainer = styled.div`
  width: 4rem;
  height: 4rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  @media (min-width: 769px) {
    width: 10rem;
    height: 10rem;
  }
`;

const SUserDescription = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-size: 0.875rem;
  line-height: 1.35em;
  @media (min-width: 769px) {
    font-size: 1rem;
  }
`;

interface UserInfoProps {
  image: string | null;
  userName: string;
  bio: string | null;
  url: string;
}

const UserInfo = (props: UserInfoProps) => {
  const { image, userName, bio, url } = props;
  const nameArray = userName?.split(" ");
  return (
    <SUserInfo>
      <SUserHeader>
        <SImgContainer>
          {image && <img src={image} alt={userName} />}
        </SImgContainer>
        <a href={url} target="_blank" rel="noreferrer">
          <h1>
            {/* Can also be done using fixed width but I kinda like this approach so each name is always on a new line */}
            {nameArray?.map((name, i) => (
              <span key={name + i}>{name}</span>
            ))}
          </h1>
        </a>
      </SUserHeader>
      <SUserDescription>{bio}</SUserDescription>
    </SUserInfo>
  );
};

export default UserInfo;
