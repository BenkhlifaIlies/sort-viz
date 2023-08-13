import styled from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'cancel' | 'control-panel' | 'drop-down';
  label: string;
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const button = ({
  variant = 'primary',
  label,
  onClick,
  children,
  disabled = false,
}: ButtonProps) => {
  return (
    <Button className={variant} {...{ disabled, onClick }}>
      {children}
      <span>{label}</span>
    </Button>
  );
};
const Button = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  gap: 0.5rem;
  margin-left: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 1em;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 0.25rem;
  background-color: transparent;
  &.primary,
  &.drop-down {
    color: white;
    background-color: var(--nice-blue);
  }
  &.cancel {
    color: #000;
    background-color: var(--gray97);
    border: 2px solid var(--nice-blue);
  }
  &.control-panel {
    color: #000;
  }
  &.drop-down {
    flex-direction: row-reverse;
    margin: unset;
    width: 180px;
    svg .close {
      transform: rotate(-180deg);
      transition: all 0.2s linear 100;
    }
  }
`;

export default button;
