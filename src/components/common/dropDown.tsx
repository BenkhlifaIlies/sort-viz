import { useState } from 'react';
import styled from 'styled-components';
import { Arrow } from './icons';

interface DropDownProps {
  currentOption: string;
  options: string[];
}

interface SubComponentProps {
  value: string;
  closeMenu: () => void;
}

const DropDown = ({ currentOption, options }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleDropdown} $rotate={String(isOpen)}>
        <span>{currentOption}</span>
        <Arrow />
      </Button>
      {isOpen && (
        <Options>
          {options.map((option, index) => {
            return (
              <DropDown.Option
                closeMenu={toggleDropdown}
                key={index}
                value={option}
              ></DropDown.Option>
            );
          })}
        </Options>
      )}
    </>
  );
};

const DropDownOption = ({ value, closeMenu }: SubComponentProps) => (
  <Option
    onClick={() => {
      console.log('algorithm', value);
      closeMenu();
    }}
  >
    <div>{value}</div>
  </Option>
);

DropDown.Option = DropDownOption;

export default DropDown;

const Button = styled.button<{ $rotate?: string }>`
  all: unset;
  cursor: pointer;
  border: none;
  min-width: 160px;
  padding: 0.25rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
  background-color: var(--nice-blue);
  border-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  :hover {
    border-color: #0000;
  }
  svg {
    ${({ $rotate }) =>
      $rotate === 'true'
        ? `
    transform: rotate(-180deg);
    transition: all .2s ease-in-out;
  `
        : `
  transform: rotate(-90deg);
  transition: all .2s ease-in-out;
`}
  }
`;
const Options = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 180px;
  :last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
const Option = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid var(--dark-gray);
  background-color: var(--gray97);
  div:hover {
    cursor: pointer;
    border-left: 2px solid #000;
    border-bottom-left-radius: 0px;
    padding-left: 4px;
  }
`;
