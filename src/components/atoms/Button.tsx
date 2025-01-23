import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary || "#007bff"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
