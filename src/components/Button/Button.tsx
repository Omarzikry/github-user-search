import styled from "styled-components";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  handleClick?: () => void;
  disabled?: boolean;
}

const SButton = styled.button`
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  padding: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid ${(props) => props.theme.colors.purple};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.purple};
  }
  &:focus {
    outline: 0;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background-color: ${(props) => props.theme.colors.purple};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const Button = (props: ButtonProps) => {
  const { type, text, handleClick, disabled = false } = props;
  return (
    <SButton type={type} onClick={handleClick} disabled={disabled}>
      {text}
    </SButton>
  );
};

export default Button;
