import styled from "styled-components";
import discoverImg from "../../assets/imgs/space.svg";

const SEmptyScreen = styled.div`
  padding-top: 1rem;
  img {
    width: 100%;
  }
  h1 {
    text-align: center;
    padding: 0 3rem;
    font-size: 1.3rem;
    margin-top: 2rem;
  }
  h2,
  p {
    padding: 0 2rem;
    line-height: 1.35em;
  }
  p {
    color: ${(props) => props.theme.colors.purple};
    margin-top: 0.5rem;
  }
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const EmptyScreen = () => {
  return (
    <SEmptyScreen>
      <img src={discoverImg} alt="" />
      <div>
        <h2>No great discovery was ever made without a bold guess</h2>
        <p>― Isaac Newton</p>
      </div>
    </SEmptyScreen>
  );
};

export default EmptyScreen;
