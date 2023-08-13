import { useState } from 'react';
import styled from 'styled-components';
import { Arrow } from './icons';
import Button from './button';
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
      <Button
        variant="drop-down"
        label={currentOption}
        onClick={toggleDropdown}
      >
        <AnimatedSvg $rotate={isOpen}>
          <Arrow />
        </AnimatedSvg>
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

const AnimatedSvg = styled.span<{ $rotate?: boolean }>`
  height: 1rem;
  svg {
    transform: ${props => (props.$rotate ? 'rotate(-180deg)' : '')};
    transition: all 0.2s ease-in-out;
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
