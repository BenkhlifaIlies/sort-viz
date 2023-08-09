import styled from 'styled-components';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'cancel' | 'control-panel';
  disabled?: boolean;
  Icon: () => JSX.Element;
  onClick: () => void;
}

const button = ({
  label,
  Icon,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <Button className={variant} {...{ disabled, onClick }}>
      <Icon />
      <span>{label}</span>
    </Button>
  );
};

const Button = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1.25rem;
  margin-right: 0.75rem;
  padding: 0.25em;
  border: none;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  &:focus {
    outline: revert;
    box-shadow: none;
    /* outline: none; */
  }
  span {
    margin-left: 0.25rem;
    display: none;
    @media (min-width: 767px) {
      display: flex;
      text-transform: capitalize;
    }
  }
  svg {
    vertical-align: middle;
  }
`;
export default button;
