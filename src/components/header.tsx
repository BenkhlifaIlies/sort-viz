import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './common/button';
import Logo from '../assets/svg/sortviz.svg';
import { RunSvg, ShuffleSvg, RandomizeSvg, CogSvg } from './common/icons';
import { AppContext } from '../contexts/context';
import { arrayGenerator, getWindowDimensions, shuffle } from '../utils/array';

const Header = () => {
  const { toggleModalVisibility, values, updateValues } =
    useContext(AppContext);

  return (
    <HeaderWrapper>
      <Wrapper>
        <StyledDiv>
          <Link to={'/'}>
            <img src={Logo} alt="AlgoViz logo" />
            <span> AlgoViz </span>
          </Link>
        </StyledDiv>
        <ControlPanel>
          <Button
            variant="control-panel"
            label="run"
            onClick={() => console.log('Run been pressed')}
          >
            <RunSvg />
          </Button>
          <Button
            variant="control-panel"
            label="shuffle"
            onClick={() => updateValues([...shuffle(values)])}
          >
            <ShuffleSvg />
          </Button>
          <Button
            variant="control-panel"
            label="randomize"
            onClick={() =>
              updateValues(arrayGenerator(0, 99, getWindowDimensions()))
            }
          >
            <RandomizeSvg />
          </Button>
          <Button
            variant="control-panel"
            label=""
            onClick={toggleModalVisibility}
          >
            <CogSvg />
          </Button>
        </ControlPanel>
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  padding-block: 1rem;
  background-color: var(--gray97);
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 1rem;
  button span {
    display: none;
  }
  @media (min-width: 767px) {
    button span {
      display: flex;
    }
  }
`;
const StyledDiv = styled.div`
  a {
    align-items: center;
    display: flex;
    text-decoration: none;
    color: inherit;
    cursor: inherit;
    &:hover {
      cursor: pointer;
    }
    img {
      height: 2rem;
      width: 2rem;
    }
    span {
      padding-left: 0.25rem;
      text-align: center;
      caret-color: transparent;
    }
  }
`;
const ControlPanel = styled.div`
  /* padding: 2px; */
  font-size: 1.5rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    width: fit-content;
    padding: unset;
  }
`;

export default Header;
