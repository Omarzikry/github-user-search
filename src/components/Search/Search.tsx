import { ChangeEvent, SyntheticEvent, useState } from "react";
import styled from "styled-components";
import searchIcon from "../../assets/imgs/search-icon.svg";
import Button from "../Button/Button";

const SForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SInputContainer = styled.div`
  position: relative;
  input {
    background-color: ${(props) => props.theme.colors.lightGrey};
    color: ${(props) => props.theme.colors.black};
    border: none;
    box-shadow: none;
    padding: ${(props) => props.theme.spacing[1]} ${(props) => props.theme.spacing[4]};
    border-radius: 0.5rem;
    &::placeholder {
      color: ${(props) => props.theme.colors.darkGrey};
    }
  }
  img {
    position: absolute;
    left: ${(props) => props.theme.spacing[0]};
    top: 50%;
    transform: translateY(-50%);
  }
  @media (min-width: 769px) {
    flex: 1;
    margin-right: 15%;
    input {
      width: 100%;
    }
  }
`;

interface SearchProps {
  handleSubmit: (e: SyntheticEvent, val: string) => void;
}

const Search = (props: SearchProps) => {
  const { handleSubmit } = props;
  const [searchInput, setSearchInput] = useState<string>("");
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchInput(value.replace(/\s/g, ""));
    if (value.length > 0) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  };

  return (
    <div>
      <SForm onSubmit={(e: SyntheticEvent) => handleSubmit(e, searchInput)}>
        <SInputContainer>
          <input
            type="text"
            placeholder="Search for users"
            onChange={handleChange}
            value={searchInput}
          />
          <img src={searchIcon} alt="" />
        </SInputContainer>
        <Button type="submit" text="Submit" disabled={isBtnDisabled} />
      </SForm>
    </div>
  );
};
export default Search;
