import { SyntheticEvent } from "react";
import styled from "styled-components";
import Search from "../Search/Search";

const SHeader = styled.section`
  box-shadow: 0px 2px 7px ${(props) => props.theme.colors.shadow};
  padding: 1.5em;
`;

interface HeaderProps {
  handleSearchSubmit: (e: SyntheticEvent, val: string) => void;
}

const Header = (props: HeaderProps) => {
  const { handleSearchSubmit } = props;

  return (
    <SHeader>
      <Search handleSubmit={handleSearchSubmit} />
    </SHeader>
  );
};

export default Header;
